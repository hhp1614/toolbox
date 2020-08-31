<template>
  <div class="mdui-row">
    <editor mode="htmlmixed" :value="htmlSource" @input="inputHtml" />
  </div>
</template>

<script>
export default {
  name: 'Html',
  data() {
    return {
      htmlSource: '<div></div>'
    }
  },
  methods: {
    inputHtml(val) {
      this.htmlSource = val
    }
  }
}
</script>
