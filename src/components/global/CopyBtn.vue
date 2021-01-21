<template>
  <button
    class="mdui-btn mdui-btn-dense mdui-text-color-theme-accent mdui-ripple copy-btn"
    v-clipboard:copy="value"
    v-clipboard:success="onCopy"
    @mouseenter="() => btn.open({ content: '复制' })"
    @mouseleave="() => btn.close()"
  >
    <i class="mdui-icon material-icons" style="margin-top: -4px;"
      >content_copy</i
    >
  </button>
</template>

<script>
/**
 * 复制按钮组件
 */
export default {
  name: 'CopyBtn',
  props: {
    value: String
  },
  data() {
    return {
      btn: null,
      tipsDefault: '复制',
      tipsSuccess: '复制成功'
    }
  },
  mounted() {
    this.btn = new this.$Tooltip('.copy-btn', { content: this.tipsDefault })
  },
  methods: {
    onCopy() {
      this.btn.close()
      this.btn.open({ content: this.tipsSuccess })
    }
  }
}
</script>
