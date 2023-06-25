<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
<!-- 监听 -->
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
<!-- 事件处理方法 -->
    <button v-on:click="greet">Greet</button>
    <p>Hello {{ this.name }}!</p>
<!-- 内联处理器中的方法 -->
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what', $event)">Say what</button>
    <p>say: {{ saySomething }}</p>
<!-- 修饰符 -->
    <input v-on:keyup.page-down="onPageDown">
    <hr>
  </div>
</template>

<script>

export default {
  name: "EventHandle",
  props: {
    serialNumber: Number
  },
  data: function () {

    return {
      title: 'Event Handle',
      counter: 0,
      name: 'Picker',
      saySomething: ''
    }
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      this.name = 'Christine';
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message, event) {
      this.saySomething = message;
      if (event) {
        alert(event.target.tagName)
      }
    },
    onPageDown: function (event) {
      console.log('event: ', event);
    }
  }
}
</script>
