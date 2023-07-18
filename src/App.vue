<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LifeCycle :serialNumber=1 />
    <CalcComputed :serialNumber="2"/>
    <StyleBind :serialNumber="3" />
    <ConditionRender :serialNumber="4" />
    <ListRender :serialNumber="5" />
    <EventHandle :serialNumber="6" />
    <FormInputBind :serialNumber="7" />
    <ComponentBase :serialNumber="8" />
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import LifeCycle from './components/LifeCycle/index.vue';
import CalcComputed from './components/CalcComputed.vue';
import StyleBind from './components/StyleBind.vue';
import ConditionRender from './components/ConditionRender.vue';
import ListRender from './components/ListRender.vue';
import EventHandle from './components/EventHandle.vue';
import FormInputBind from './components/FormInputBind.vue';
import ComponentBase from './components/ComponentBase.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LifeCycle,
    CalcComputed,
    StyleBind,
    ConditionRender,
    ListRender,
    EventHandle,
    FormInputBind,
    ComponentBase
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
