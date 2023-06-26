<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
    <button-counter title="btn1"></button-counter>
    <button-counter title="btn2"></button-counter>
    <button-counter></button-counter>

    <p>blog-post</p>
    <blog-post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :fontSize="fontSize"
      @enlarge-text="enlargeText"
    ></blog-post>

    <div>
      <input-box v-model="value"/>
      <button @click="getInputBoxValue">get input box value</button>
    </div>

    <alert-box>Something bad happened.</alert-box>

    <div>
      <p>
        <button @click="changeCurrentTabComponent('alert-box')">alert-box</button>
        <button @click="changeCurrentTabComponent('input-box')">input-box</button>
        <button @click="changeCurrentTabComponent('button-counter')">button-counter</button>
      </p>
      <component v-bind:is="currentTabComponent"></component>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: "ComponentBase",
  props: {
    serialNumber: Number
  },
  data: function () {

    return {
      title: 'Component Base',
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      fontSize: 16,
      value: '',
      currentTabComponent: 'alert-box'
    }
  },
  methods: {
    enlargeText(delte) {
      console.log('============');
      this.fontSize+= delte;
    },
    getInputBoxValue() {
      console.log('this.value: ', this.value);
    },
    changeCurrentTabComponent(comp) {
      this.currentTabComponent = comp;
    }
  }
}
</script>
