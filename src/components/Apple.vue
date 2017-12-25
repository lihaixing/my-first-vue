<template>
  <div>
    <h1>{{message}}</h1>
    <router-view></router-view>
    <!--以下可以写在父组件里-->
    <router-link :to="{path:'/apple/red'}">to red apple</router-link>
    <router-link :to="{path:'/apple/green'}">to green apple</router-link>
  </div>
</template>

<script>
  export default {
    name: 'apple',
    data () {
      return {
        message: 'I am apple'
      }
    }
  }
</script>

<style scoped>

</style>
