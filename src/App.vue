<template>
  <div id="app">
    <header-menu/>
    <div>
      <detail/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import router from './assets/router.js'
  import headerMenu from './components/menu.vue';
  import detail from './components/detail.vue';

  export default {
    name: 'app',
    router,
    components: {
      headerMenu,
      detail
    },
    data() {
            return {
                menushow: true,
                whiteback: false,
                loginwindow: false,
                fooddetailinfo: false,
                nowpage: "logo"

            }
    },
    methods: {
      showLogin() {
        console.log("LoginShow");
        this.loginwindow = true;
      },
      changemenu() {

      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Kanit', 'Noto Sans KR';
    padding: 0px;
    margin: 0px;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    color: #2c3e50;
    font-size: 0.85em;
  }
</style>