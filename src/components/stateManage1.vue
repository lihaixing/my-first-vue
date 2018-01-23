<template>
  <div>
    <h3>状态管理1中的总价</h3>
    <div>{{totalPrice}}</div>
    <button @click="addPrice">加价10</button>
    <button @click="increment(22)">加价Mutations22</button>
    <button @click="minusPrice">减价10</button>
    <button @click="addCart">改nickname</button>
    {{nickName}}
    <br>
    <router-link :to="{path:'/stateManage2'}">to stateManage2</router-link>
    <div class="mapStates">
      count:{{count}}<br>
      countAlias:{{countAlias}}<br>
      countPlusLocalState:{{countPlusLocalState}}<br>
      totalPrice:{{totalPrice}}<br>
      getTotalPrice:{{getTotalPrice}}<br>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'state-manage1',
    data() {
      return {
        price: 10,
        localCount: 110
      }
    },
    computed: {
      //也可以用数组mapState([nickName]),也可以不用...
      ...mapState({
        // 箭头函数可使代码更简练
        count: state => state.count,

        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'count',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState(state) {
          return state.count + this.localCount
        },
        nickName: 'nickName'
      }),
      ...mapGetters([
        'getTotalPrice'
      ]),
      totalPrice() {
        return this.$store.getters.getTotalPrice
      }
    },
    methods: {
      ...mapMutations([
        // `mapMutations` 也支持载荷：
        'increment' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
      addPrice() {
        this.$store.commit('increment', this.price)
      },
      minusPrice() {
        this.$store.commit('decrement', this.price)
      },
      addCart() {
        this.$store.dispatch('addCart')
      },
      ...mapActions({
        add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      })
    }
  }
</script>

<style scoped>

</style>
