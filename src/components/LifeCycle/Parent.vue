<template>
  <div>
    this is parent ...
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';

export default {
  name: 'parentComponent',
  components: {
    Child1,
    Child2
  },
  beforeCreate() {
    console.log('父：====beforeCreate');
  },
  created() {
    console.log('父：====created');
  },
  beforeMount() {
    console.log('父：====beforeMount');
  },
  mounted() {
    console.log('父：====mounted');
  },
  beforeUpdate() {
    console.log('父：====beforeUpdate');
  },
  updated() {
    console.log('父：====updated');
  },
  beforeDestroy() {
    console.log('父：====beforeDestroy');
  },
  destroyed() {
    console.log('父：====destroyed');
  }
}
</script>

<style lang="less" scoped>

</style>