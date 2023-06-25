<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
    <p class="static" :class="{active: isActive, error: hasError}">class bing with style - testing</p>
    <p class="static" :class="classes">class bing with style - testing - computed</p>
    <p class="static" :class="[isActive ? 'active' : '', { error: hasError}]">class bing with style - testing - array</p>
    <p>
      <button @click="getActive">active</button>
      <button @click="getError">error</button>
    </p>

    <h2>inline style</h2>
    <p :style="{color: color, fontSize: fontSize+'px'}">inline style - testing 内联的绑定</p>
    <p :style="styleObject">inline style - testing 内联的绑定 - object</p>
    <p :style="[styleObject, overridingStyles]">inline style - testing 内联的绑定 - array</p>
    <hr>
  </div>
</template>

<script>
export default{
  name: "StyleBind",
  props: {
    serialNumber: Number
  },
  data: function () {
    return {
      title: 'bind class and style',
      isActive: false,
      hasError: false,
      color: 'red',
      fontSize: 30,
      styleObject: {
        color: 'lightBlue',
        fontSize: '30px'
      },
      overridingStyles: {
        color: 'orange',
      }
    }
  },
  methods: {
    getActive() {
      this.isActive = !this.isActive;
    },
    getError() {
      this.hasError = !this.hasError;
    }
  },
  computed: {
    classes() {

      return {
        active: this.isActive,
        error: this.hasError
      }
    }
  }
}
</script>

<style scoped>
  .active {
    color: blue;
  }
  .error {
    color: red;
  }
</style>
