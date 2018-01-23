// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import VResource from 'vue-resource'
import Vuex from 'vuex'
import Apple from './components/Apple'
import Banana from './components/Banana'
import redApple from './components/redApple'
import greenApple from './components/greenApple'
import Pear from './components/Pear'

import stateManage1 from './components/stateManage1'
import stateManage2 from './components/stateManage2'

Vue.use(VResource);
Vue.use(VRouter);
Vue.use(Vuex);
import {ADD_TO_CART, SET_CART_ITEMS, SET_CHECKOUT_STATUS, RECEIVE_PRODUCTS} from './mutation-types'

let store = new Vuex.Store({
  state: {
    totalPrice: 0,
    count: 0,
    nickName: 'haixing'
  },
  //getters不必每次都要取原始值，有点像computed
  getters: {
    getTotalPrice(state) {
      return state.totalPrice
    }
  },
  mutations: {
    increment(state, price) {
      state.totalPrice += price;
    },
    decrement(state, price) {
      state.totalPrice -= price;
    },
    [ADD_TO_CART](state) {
      state.nickName += 'a'
    }
  },
  //actions只能调用mutations,而不能改变state
  //actions可以进行异步操作，而mutations只能同步操作
  actions: {
    // context是store
    increase({commit}, price) {
      commit('increment', price);
    },
    addCart({commit}){
      commit('ADD_TO_CART');
    }
  }
});

//还可以分模块
// var moduleA={
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {}
// };
// let store = new Vuex.Store({
//   modules:{
//     a:moduleA,
//     b:moduleB
//   }
// });
// store.state.a //=> moduleA's state
// store.state.b //=> moduleB's state


let router = new VRouter({
  mode: 'history',
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/apple'
    },
    {
      path: '/apple',
      name: 'applePage',
      // component: Apple,
      components: {
        default: Apple,
        viewA: redApple,
        viewB: greenApple
      },
      children: [
        {
          path: 'red',
          component: redApple,
        },
        {
          path: 'green',
          component: greenApple,
          //props解耦，很方便
          props: {number: 128}
        }
      ]
    },
    {
      path: '/banana',
      component: Banana,
    },
    {
      path: '/pear/:color',
      name: 'pearPage',
      component: Pear,
      // 别名(不会用)
      alias: '/banana'
    },
    {
      path: '/stateManage1',
      component: stateManage1
    },
    {
      path: '/stateManage2',
      component: stateManage2
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

//手动导航到路由黄梨
// setTimeout(function(){
//   router.push({ name: 'pearPage', params: { color:'yellow'}})
// },1000);
