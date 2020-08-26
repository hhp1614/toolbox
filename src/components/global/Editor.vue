<template>
  <div class="editor mdui-m-y-1">
    <label v-if="label" :class="{ dark }">
      {{ label }}
    </label>
    <codemirror
      class="mdui-shadow-2"
      placeholder="hello"
      :value="value"
      :options="{ mode, readOnly, lineNumbers, tabSize, lineWrapping, theme: cmTheme }"
      @input="onInput"
      @mousedown="onClick"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

/**
 * 编辑器组件
 */
export default {
  name: 'Editor',
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
  computed: {
    ...mapState(['dark']),
    // codemirror 主题
    cmTheme() {
      return this.dark ? 'monokai' : 'default'
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    onClick(e) {
      e.preventDefault()
    }
  }
}
</script>
