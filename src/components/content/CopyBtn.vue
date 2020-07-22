<template>
  <v-tooltip v-model="show" color="success" :open-on-hover="false" top>
    <template v-slot:activator="{ attrs }">
      <v-btn class="mr-4" color="primary" v-bind="attrs" v-clipboard:copy="value" v-clipboard:success="onCopy" small>
        复制
      </v-btn>
    </template>
    <span>复制成功</span>
  </v-tooltip>
</template>

<script>
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
      show: false
    };
  },
  methods: {
    onCopy() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 800);
    }
  }
};
</script>
