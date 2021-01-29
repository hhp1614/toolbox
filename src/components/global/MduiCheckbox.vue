<template>
  <label class="mdui-checkbox mdui-p-l-3 mdui-m-l-2">
    <input
      type="checkbox"
      v-model="checkboxModel"
      :value="value"
      :disabled="disabled"
    />
    <i class="mdui-checkbox-icon"></i>
    {{ label }}
  </label>
</template>

<script>
/**
 * MDUI 多选框组件
 */
export default {
  name: 'MduiCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: [Boolean, Array],
    value: [Number, String],
    label: [Number, String],
    disabled: Boolean
  },
  computed: {
    checkboxModel: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('change', val);
      }
    }
  }
};
</script>
