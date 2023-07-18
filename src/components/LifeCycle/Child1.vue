<template>
  <div>
    this is child1 ...
  </div>
</template>

<script>
export default {
  name: 'childComponent',
  beforeCreate() {
    console.log('子111：====beforeCreate');
  },
  created() {
    console.log('子111：====created');
  },
  beforeMount() {
    console.log('子111：====beforeMount');
  },
  mounted() {
    console.log('子111：====mounted');
  },
  beforeUpdate() {
    console.log('子111：====beforeUpdate');
  },
  updated() {
    console.log('子111：====updated');
  },
  beforeDestroy() {
    console.log('子111：====beforeDestroy');
  },
  destroyed() {
    console.log('子111：====destroyed');
  }
}
</script>

<style lang="less" scoped></style>