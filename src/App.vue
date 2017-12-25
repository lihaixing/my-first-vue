<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="myTran">
      <!--<keep-alive>-->
      <router-view></router-view>
      <!--</keep-alive>-->
    </transition>

    <h2>命名视图</h2>
    <router-view name="viewA"></router-view>
    <router-view name="viewB"></router-view>
    <div>
      <router-link :to="{path:'/apple'}">to apple</router-link>
      <br>
      <router-link :to="{path:'/banana'}">to banana</router-link>
      <br>
      <router-link :to="{name:'pearPage',params:{color:'yellow'}}">to pear</router-link>
      <br>

      <h2>以下多复习</h2>
      <router-link :to="{name:'applePage'}">name=>applePage</router-link>
      <br>
      <router-link :to="'/apple'" tag="li">tag a => tag li</router-link>
      <br>
    </div>
    <HelloWorld/>
  </div>
</template>

<script>

  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'app',

    components: {
      HelloWorld
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
    margin-top: 60px;
  }

  /*myTran*/
  .myTran-enter {
    opacity: 0;
    transform: translateY(-500px);
  }

  .myTran-leave {
    opacity: 1
  }

  .myTran-enter-active {
    transition: all 0.5s ease-in-out;
  }

  .myTran-leave-active {
    opacity: 0;
    transform: translateY(500px);
    transition: all 0.5s ease-in-out;
  }
</style>
