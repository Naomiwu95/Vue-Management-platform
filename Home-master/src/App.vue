<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">

</router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'  

export default {
  name: 'App',
 
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
