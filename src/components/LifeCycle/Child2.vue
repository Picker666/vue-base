<template>
  <div>
    this is child1 ...
  </div>
</template>

<script>
export default {
  name: 'childComponent',
  beforeCreate() {
    console.log('子222：====beforeCreate');
  },
  created() {
    console.log('子222：====created');
  },
  beforeMount() {
    console.log('子222：====beforeMount');
  },
  mounted() {
    console.log('子222：====mounted');
  },
  beforeUpdate() {
    console.log('子222：====beforeUpdate');
  },
  updated() {
    console.log('子222：====updated');
  },
  beforeDestroy() {
    console.log('子222：====beforeDestroy');
  },
  destroyed() {
    console.log('子222：====destroyed');
  }
}
</script>

<style lang="less" scoped></style>