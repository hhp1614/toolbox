<template>
  <div class="mdui-row">
    <editor
      class="line-20"
      mode="htmlmixed"
      :value="code"
      @input="acUpdateCode"
    />
    <div class="mdui-m-t-1">
      <mdui-btn @click="format" dense ripple>格式化</mdui-btn>
      <mdui-btn
        mdui-tooltip="{content: '删除不必要的空格和换行'}"
        @click="compress(0)"
        dense
        ripple
        >净化</mdui-btn
      >
      <mdui-btn
        mdui-tooltip="{content: '在“净化”的基础上删除注释和不必要的单位表示，将 rgb 颜色转换为更短的十六进制表示'}"
        @click="compress(1)"
        dense
        ripple
      >
        压缩
      </mdui-btn>
      <mdui-btn
        mdui-tooltip="{content: '在“压缩”的基础上合并属性与规则，删除重复的规则'}"
        @click="compress(2)"
        dense
        ripple
        >压缩并优化
      </mdui-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CleanCss from 'clean-css'

export default {
  name: 'Css',
  computed: {
    ...mapState('format/css', ['code'])
  },
  methods: {
    ...mapActions('format/css', ['acUpdateCode']),
    // 事件：格式化
    format() {
      const code = new CleanCss({ format: 'beautify' }).minify(this.code).styles
      this.acUpdateCode(code)
    },
    // 事件：压缩
    compress(level) {
      const code = new CleanCss({ level }).minify(this.code).styles
      this.acUpdateCode(code)
    }
  }
}
</script>
