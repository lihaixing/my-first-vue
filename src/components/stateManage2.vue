<template>
  <div>
    <h3>状态管理2中的总价</h3>
    <div>{{totalPrice}}</div>
    <button @click="addPrice">加价5</button>
    <button @click="minusPrice">减价5</button><br>

    <router-link :to="{path:'/stateManage1'}">to stateManage1</router-link>
  </div>
</template>

<script>
  export default {
    name: 'state-manage2',
    data () {
      return {
        price:5
      }
    },
    computed: {
      totalPrice () {
        return this.$store.state.totalPrice
      }
    },
    methods: {
      addPrice () {
        //调action用dispatch,调mutation用commit
        this.$store.dispatch('increase',this.price)
      },
      minusPrice () {
        //其实这样是不合理的，应该通过actions去触发mutations，看addPrice
        this.$store.commit('decrement',this.price)
      }
    }
  }
</script>

<style scoped>

</style>
