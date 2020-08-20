<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import Layout from './components/content/Layout'

export default {
  name: 'App',
  components: { Layout }
}
</script>
