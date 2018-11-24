<template>
<div id="app">
    <common-header/>
    <router-view/>
</div>
</template>

<script>
import commonHeader from '@/views/CommonHeader'

export default {
    name: 'App',
    components: {
        'commonHeader': commonHeader
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
