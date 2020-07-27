<template>
  <button
    class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme mdui-ripple copy-btn"
    v-clipboard:copy="value"
    v-clipboard:success="onCopy"
    @mouseenter="() => btn.open({ content: '复制' })"
    @mouseleave="() => btn.close()"
  >
    <i class="mdui-icon material-icons">content_copy</i>
  </button>
</template>

<script>
import mdui from 'mdui';
/**
 * 复制按钮组件
 */
export default {
  name: 'CopyBtn',
  props: {
    value: { type: String, default: '' }
  },
  data() {
    return {
      btn: null,
      tipsDefault: '复制',
      tipsSuccess: '复制成功'
    };
  },
  mounted() {
    this.btn = new mdui.Tooltip('.copy-btn', { content: this.tipsDefault });
  },
  methods: {
    onCopy() {
      this.btn.close();
      this.btn.open({ content: this.tipsSuccess });
    }
  }
};
</script>
