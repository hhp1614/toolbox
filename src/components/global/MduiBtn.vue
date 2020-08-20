<template>
  <button
    class="mdui-btn"
    :class="mduiClass"
    :disabled="disabled"
    @click="$emit('click', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <slot />
  </button>
</template>

<script>
/**
 * MDUI 按钮组件
 */
export default {
  name: 'MduiBtn',
  props: {
    // 涟漪动画效果
    ripple: { type: Boolean, default: false },
    // 浮动按钮
    raised: { type: Boolean, default: false },
    // 图标按钮
    icon: { type: Boolean, default: false },
    // 密集型按钮
    dense: { type: Boolean, default: false },
    // 块级元素
    block: { type: Boolean, default: false },
    // 禁用状态
    disabled: { type: Boolean, default: false },
    // 背景颜色 mdui-color-[color]
    color: { type: String, default: '' },
    // 文本颜色 mdui-text-color-[textColor]
    textColor: { type: String, default: '' }
  },
  computed: {
    mduiClass() {
      const c = {
        'mdui-ripple': this.ripple,
        'mdui-btn-raised': this.raised,
        'mdui-btn-icon': this.icon,
        'mdui-btn-dense': this.dense,
        'mdui-btn-block': this.block
      }
      if (this.color) {
        c['mdui-color-' + this.color] = true
      }
      if (this.textColor) {
        c['mdui-text-color-' + this.textColor] = true
      }
      return c
    }
  }
}
</script>
