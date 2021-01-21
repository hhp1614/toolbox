<template>
  <label class="mdui-switch">
    <input type="checkbox" v-model="checkboxModel" :disabled="disabled" />
    <i class="mdui-switch-icon"></i>
    <span class="mdui-m-l-2">{{ label }}</span>
  </label>
</template>

<script>
/**
 * MDUI 开关组件
 */
export default {
  name: 'MduiSwitch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    label: [Number, String],
    disabled: Boolean
  },
  computed: {
    checkboxModel: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>
