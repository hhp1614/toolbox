<template>
  <div
    ref="pasteImage"
    type="text"
    class="paste-image"
    tabindex="-1"
    @focus="onFocus"
    @blur="onBlur"
  >
    点击这里可以直接粘贴图片
  </div>
</template>

<script>
/**
 * 粘贴图片组件
 */
export default {
  name: 'PasteImage',
  methods: {
    onFocus() {
      document.addEventListener('paste', this.onPaste)
    },
    onBlur() {
      document.removeEventListener('paste', this.onPaste)
    },
    // 粘贴
    onPaste(e) {
      const items = e.clipboardData && e.clipboardData.items
      const file = this.getImageFromClipboard(items)

      if (!file) return

      this.$emit('paste', file)
    },
    // 从剪贴板获取图片
    getImageFromClipboard(items) {
      if (!items || !items.length) return null

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.match(/image/)) {
          return items[i].getAsFile()
        }
      }
    }
  }
}
</script>
