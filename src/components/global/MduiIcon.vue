<template>
  <i class="mdui-icon material-icons" @click="$emit('click', $event)">{{
    type
  }}</i>
</template>

<script>
/**
 * MDUI 图标组件
 */
export default {
  name: 'MduiIcon',
  props: {
    // 图标名称
    type: String
  }
}
</script>
