<template>
  <div>
    <h3>状态管理1中的总价</h3>
    <div>{{totalPrice}}</div>
    <button @click="addPrice">加价10</button>
    <button @click="minusPrice">减价10</button><br>

    <router-link :to="{path:'/stateManage2'}">to stateManage2</router-link>
  </div>
</template>

<script>
  export default {
    name: 'state-manage1',
    data () {
      return {
        price:10
      }
    },
    computed: {
      totalPrice () {
        return this.$store.getters.getTotalPrice
      }
    },
    methods: {
      addPrice () {
        this.$store.commit('increment',this.price)
      },
      minusPrice () {
        this.$store.commit('decrement',this.price)
      }
    }
  }
</script>

<style scoped>

</style>
