<template>
  <label class="mdui-checkbox mdui-p-l-3 mdui-m-l-2">
    <input type="checkbox" :checked="value" @change="$emit('change', $event.target.checked)" />
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
  props: {
    value: { type: Boolean, required: true },
    label: { type: String, default: '' }
  }
};
</script>
