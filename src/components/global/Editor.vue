<template>
  <div class="editor mdui-m-y-1">
    <label v-if="label" :class="{ dark }">
      {{ label }}
    </label>
    <div class="mdui-shadow-2">
      <textarea ref="textarea" />
    </div>
  </div>
</template>

<script>
// CodeMirror 代码高亮
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
// CodeMirror 主题样式
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import { mapState } from 'vuex';

/**
 * 编辑器组件
 */
export default {
  name: 'Editor',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    // 代码
    value: String,
    // 代码语法
    mode: { default: null },
    // 只读
    readOnly: Boolean,
    // 显示行号
    lineNumbers: { type: Boolean, default: true },
    // 缩进
    tabSize: { type: Number, default: 2 },
    // 自动换行
    lineWrapping: { type: Boolean, default: true },
    // 标签
    label: String
  },
  data() {
    return {
      // CodeMirror 实例
      codemirror: null
    };
  },
  computed: {
    ...mapState(['dark']),
    // CodeMirror 主题
    cmTheme() {
      return this.dark ? 'monokai' : 'default';
    }
  },
  watch: {
    // 设置主题
    cmTheme(val) {
      this.codemirror.setOption('theme', val);
    },
    // 设置 value
    value(val) {
      const cmVal = this.codemirror.getValue();
      if (val !== cmVal) {
        const scrollInfo = this.codemirror.getScrollInfo();
        this.codemirror.setValue(val);
        this.codemirror.scrollTo(scrollInfo.left, scrollInfo.top);
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      // 实例化 CodeMirror
      this.codemirror = CodeMirror.fromTextArea(this.$refs.textarea, {
        mode: this.mode,
        theme: this.cmTheme,
        readOnly: this.readOnly,
        lineNumbers: this.lineNumbers,
        tabSize: this.tabSize,
        lineWrapping: this.lineWrapping
      });
      this.codemirror.setValue(this.value);
      // 监听事件
      this.codemirror.on('change', cm => {
        this.$emit('input', cm.getValue());
      });
    }
  }
};
</script>
