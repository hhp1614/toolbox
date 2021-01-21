<template>
  <label class="mdui-radio mdui-p-l-3 mdui-m-l-2">
    <input
      type="radio"
      v-model="radioModel"
      :value="value"
      :disabled="disabled"
    />
    <i class="mdui-radio-icon"></i>
    {{ label }}
  </label>
</template>

<script>
/**
 * MDUI 单选框组件
 */
export default {
  name: 'MduiRadio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: [Boolean, Number, String],
    value: [Number, String],
    label: [Number, String],
    disabled: Boolean
  },
  computed: {
    radioModel: {
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
