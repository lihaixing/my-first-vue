<template>
  <div>
    <h3>状态管理1中的总价</h3>
    <div>{{totalPrice}}</div>
    <button @click="addPrice">加价10</button>
    <button @click="minusPrice">减价10</button>
    <button @click="addCartx">改nickname</button>
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
  import {mapState, mapGetters} from 'vuex'

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
        }
      }),
      ...mapGetters([
        'getTotalPrice'
      ]),
      totalPrice() {
        return this.$store.getters.getTotalPrice
      }
    },
    methods: {
      addPrice() {
        this.$store.commit('increment', this.price)
      },
      minusPrice() {
        this.$store.commit('decrement', this.price)
      },
      addCartx() {
        this.$store.commit('addCart')
      }
    }
  }
</script>

<style scoped>

</style>
