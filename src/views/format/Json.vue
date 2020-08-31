<template>
  <div id="format-json" class="mdui-row">
    <div>
      <div
        class="mdui-chip mdui-m-r-1"
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ 'mdui-text-color-theme-accent': activeId === item.id }"
        @click="changeTab(item.id)"
      >
        <span class="mdui-chip-title">{{ item.name }}</span>
        <span class="mdui-chip-delete" @click.stop="deleteTab(index)">
          <i class="mdui-icon material-icons">cancel</i>
        </span>
      </div>
      <mdui-btn
        class="mdui-text-color-theme mdui-m-r-1"
        mdui-tooltip="{content: '新建 tab'}"
        @click="addTab"
        icon
        dense
        ripple
      >
        <mdui-icon type="add" />
      </mdui-btn>
      <mdui-btn
        class="mdui-text-color-red mdui-m-r-1"
        mdui-tooltip="{content: '删除所有 tab'}"
        @click="clearTab"
        icon
        dense
        ripple
      >
        <mdui-icon type="delete" />
      </mdui-btn>
    </div>
    <div class="mdui-col-xs-6">
      <editor mode="application/json" v-model="jsonSource" @input="inputJson" />
      <div class="mdui-m-t-1">
        <mdui-btn @click="format" dense ripple>格式化</mdui-btn>
        <mdui-btn @click="compress" dense ripple>压缩</mdui-btn>
      </div>
    </div>
    <div class="mdui-col-xs-6">
      <vue-json-pretty
        :data="jsonObject"
        class="json-view mdui-m-t-1 mdui-shadow-2"
        showLength
        highlightMouseoverNode
      />
      <div class="mdui-m-t-1">
        <copy-btn :value="JSON.stringify(jsonObject, null, 2)" />
        <div class="mdui-btn-group">
          <mdui-btn @click="changeOrder('default')" dense ripple>默认</mdui-btn>
          <mdui-btn @click="changeOrder('asc')" dense ripple>升序</mdui-btn>
          <mdui-btn @click="changeOrder('desc')" dense ripple>降序</mdui-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VueJsonPretty from 'vue-json-pretty'
import { isArray, isObject, isObjectLike } from '@hhp1614/utils/lib/common/type'
import { each, sort } from '@hhp1614/utils/lib/common/collection'

export default {
  name: 'Json',
  components: { VueJsonPretty },
  data() {
    return {
      // 输入的 JSON
      jsonSource: '',
      // 输出的对象
      jsonObject: {}
    }
  },
  computed: {
    ...mapState('format/json', ['tabs', 'activeId'])
  },
  created() {
    this.jsonSource = this.tabs.find(i => i.id === this.activeId)?.json ?? ''
    this.generateFromSource()
  },
  methods: {
    ...mapActions('format/json', ['acAddTab', 'acUpdateActiveTab', 'acUpdateTab', 'acClearTabs', 'acDeleteTab']),
    // 事件：输入 JSON
    inputJson() {
      this.acUpdateTab({ id: this.activeId, json: this.jsonSource })
      this.generateFromSource()
    },
    // 事件：切换 tab
    changeTab(id) {
      // 优化
      if (id === this.activeId) return
      this.setJsonSource(this.acUpdateActiveTab, id)
    },
    // 事件：增加 tab
    addTab() {
      this.setJsonSource(this.acAddTab)
    },
    // 事件：删除 tab
    deleteTab(index) {
      if (this.tabs.length <= 1) return
      this.setJsonSource(this.acDeleteTab, index)
    },
    // 事件：清空 tab
    clearTab() {
      this.setJsonSource(this.acClearTabs)
    },
    // 事件：排序 default-默认 asc-升序 desc-降序
    changeOrder(order) {
      // 默认原顺序输出
      if (order === 'default') {
        this.generateFromSource()
        return
      }
      this.jsonObject = this.sortJson(this.jsonObject, order)
    },
    // 事件：格式化
    format() {
      this.jsonSource = JSON.stringify(this.jsonObject, null, 2)
    },
    // 事件：压缩
    compress() {
      this.jsonSource = JSON.stringify(this.jsonObject)
    },
    // 根据输入 JSON 生成对象
    generateFromSource() {
      // 输入为空
      if (this.jsonSource.trim() === '') {
        this.jsonObject = {}
        this.showError(false)
        return
      }
      const json = this.parseJson(this.jsonSource)
      // 输入不是数组或对象
      if (!isObjectLike(json)) {
        this.showError()
        return
      }
      this.jsonObject = json
      this.showError(false)
    },
    // 解析 JSON 字符串
    parseJson(json) {
      try {
        return JSON.parse(json)
      } catch {
        return null
      }
    },
    // 显示错误信息
    showError(show = true) {
      if (!show) return
      this.jsonObject = { error: '不是有效的 JSON 字符串' }
    },
    // 设置输入的 JSON
    setJsonSource(action, param) {
      action(param).then(() => {
        this.jsonSource = this.tabs.find(i => i.id === this.activeId)?.json ?? ''
        this.generateFromSource()
      })
    },
    // JSON 排序
    sortJson(json, order) {
      json = isArray(json) ? [...json] : { ...sort(json, order) }
      each(json, (value, key) => {
        if (isObject(value)) {
          // 递归排序
          json[key] = this.sortJson(value, order)
        }
      })
      return json
    }
  }
}
</script>
