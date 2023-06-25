<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
    <h2 v-if="count%3 === 0">Vue is count!</h2>
    <h2 v-else-if="count%3 === 1">
      <h3>inner...</h3>
      Vue is anything
    </h2>
    <template v-else>
      <h2>😢😢😢</h2>
      <h2>Oh no 😢</h2>
    </template>
    <p><button @click="changeCount">changeCount</button></p>

    <div>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" key="username-input" />
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="username-input">
      </template>
      <p><button @click="changeInput">changeInput</button></p>
    </div>

    <h2>v-show</h2>
    <h1 v-show="ok">Hello, Picker!</h1>
    <p><button @click="changeOk">changeOk</button></p>

    <hr>
  </div>
</template>

<script>

export default {
  name: "StyleBind",
  props: {
    serialNumber: Number
  },
  data: function () {

    return {
      title: 'condition',
      count: 0,
      loginType: 'username',
      ok: true
    }
  },
  methods: {
    changeCount() {
      this.count++;
    },
    changeInput() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    },
    changeOk() {
      this.ok = !this.ok;
    }
  }
}
</script>
