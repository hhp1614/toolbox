<template>
  <label class="mdui-checkbox mdui-p-l-3 mdui-m-l-2">
    <input type="checkbox" :checked="checked" :disabled="disabled" @change="$emit('change', $event.target.checked)" />
    <i class="mdui-checkbox-icon"></i>
    {{ label }}
  </label>
</template>

<script>
/**
 * MDUI 选择控件
 */
export default {
  name: 'MduiCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: { type: Boolean, required: true },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  }
}
</script>
