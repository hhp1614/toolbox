<template>
  <v-container id="format-json" fluid>
    <!--tab 栏-->
    <v-chip-group :value="activeTabName" active-class="primary--text" mandatory>
      <v-chip v-for="(item, index) in tabs" :key="index" :value="item.name" @click="changeTab(item.name)" small>
        {{ item.name }}
      </v-chip>
      <v-chip color="success" @click="addTab" small>
        <v-icon small>mdi-plus</v-icon>
        新建
      </v-chip>
      <v-chip :disabled="tabs.length <= 1" color="error" @click="clearTab" small>
        <v-icon small>mdi-delete</v-icon>
        清空
      </v-chip>
    </v-chip-group>

    <v-row>
      <!--输入-->
      <v-col cols="5">
        <codemirror
          v-model="jsonSource"
          class="shadow"
          :options="cmOptions"
          @input="inputJson"
          placeholder="输入 JSON"
        />
      </v-col>

      <!--输出-->
      <v-col cols="7">
        <vue-json-pretty :data="jsonObject" class="json-view shadow" showLength highlightMouseoverNode />
        <div class="mt-2">
          <copy-btn :value="JSON.stringify(jsonObject, null, 2)" />
          排序：
          <v-btn class="mr-2" @click="changeOrder('default')" small>默认</v-btn>
          <v-btn class="mr-2" @click="changeOrder('asc')" small>升序</v-btn>
          <v-btn class="mr-2" @click="changeOrder('desc')" small>降序</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import VueJsonPretty from 'vue-json-pretty';
import 'codemirror/mode/javascript/javascript';
import { isArray, isObject, isObjectLike, isPlainObject } from '@hhp1614/utils/lib/common/type';
import { each, sort } from '@hhp1614/utils/lib/common/collection';
import CopyBtn from '../../components/content/CopyBtn';

export default {
  name: 'FormatJson',
  components: { CopyBtn, VueJsonPretty },
  data() {
    return {
      // 输入的 JSON
      jsonSource: '',
      // 输出的对象
      jsonObject: {},
      // codemirror 选项
      cmOptions: {
        mode: 'application/json'
      }
    };
  },
  computed: {
    ...mapState('format/json', ['tabs', 'activeTabName'])
  },
  created() {
    this.jsonSource = this.tabs.find(i => i.name === this.activeTabName)?.json ?? '';
  },
  methods: {
    ...mapActions('format/json', ['acAddTab', 'acUpdateActiveTab', 'acUpdateTab', 'acClearTabs']),
    // 事件：输入 JSON
    inputJson() {
      this['acUpdateTab']({ name: this.activeTabName, json: this.jsonSource });
      this.generateFromSource();
    },
    // 根据输入 JSON 生成对象
    generateFromSource() {
      // 输入为空
      if (this.jsonSource.trim() === '') {
        this.jsonObject = {};
        this.showError(false);
        return;
      }
      const json = this.parseJson(this.jsonSource);
      //
      if (!isObjectLike(json)) {
        this.showError();
        return;
      }
      this.jsonObject = json;
      this.showError(false);
    },
    // 解析 JSON 字符串
    parseJson(json) {
      try {
        return JSON.parse(json);
      } catch {
        return null;
      }
    },
    // 显示错误信息
    showError(show = true) {
      if (!show) return;
      this.jsonObject = { error: '不是有效的 JSON 字符串' };
    },
    // 设置输入的 JSON
    setJsonSource() {
      this.jsonSource = this.tabs.find(i => i.name === this.activeTabName)?.json ?? '';
      this.generateFromSource();
    },
    // 事件：切换 tab
    changeTab(name) {
      this['acUpdateActiveTab'](name).then(() => this.setJsonSource());
    },
    // 事件：增加 tab
    addTab() {
      this['acAddTab']().then(() => this.setJsonSource());
    },
    // 事件：清空 tab
    clearTab() {
      this['acClearTabs']().then(() => this.setJsonSource());
    },
    // 事件：排序 default-默认 asc-升序 desc-降序
    changeOrder(order) {
      // 默认原顺序输出
      if (order === 'default') {
        this.generateFromSource();
        return;
      }
      this.jsonObject = this.sortJson(this.jsonObject, order);
    },
    // JSON 排序
    sortJson(json, order) {
      if (isPlainObject(json)) {
        json = { ...sort(json, order) };
      }
      if (isArray(json)) {
        json = [...json];
      }
      each(json, (value, key) => {
        if (isObject(value)) {
          // 递归排序
          json[key] = this.sortJson(value, order);
        }
      });
      return json;
    }
  }
};
</script>
