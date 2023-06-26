<template>
  <div>

    <button v-on:click="handleClick">{{title}}</button>
    <h3>{{ count }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  props: {
    title: {
      type: String,
      default: 'button - title'
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    handleClick(){
      this.count++;
    }
  },
}
</script>