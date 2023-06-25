<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LifeCycle :serialNumber=1 />
    <CalcComputed :serialNumber="2"/>
    <StyleBind :serialNumber="3" />
    <ConditionRender :serialNumber="4" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import LifeCycle from './components/LifeCycle.vue';
import CalcComputed from './components/CalcComputed.vue';
import StyleBind from './components/StyleBind.vue';
import ConditionRender from './components/ConditionRender.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LifeCycle,
    CalcComputed,
    StyleBind,
    ConditionRender
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
