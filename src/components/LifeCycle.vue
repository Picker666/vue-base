<template>
  <div class="lifeCycle">
    <h1>{{ `${serialNumber}、${title}` }}</h1>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <div v-bind:id="'id' + dynamicId"><button v-bind:disabled="isButtonDisabled" v-on:click="handleClick">Button</button></div>
    <p v-if="seen">you can see me now...</p>
    <p v-bind:[attr]="'dynamicAttr'" v-on:click="clickParentChange">
      动态属性
      <button @click.stop="clickChange">改变一下</button>
    </p>
    <hr />
  </div>
</template>

<script>

export default {
  name: 'LifeCycle',
  props: {
    serialNumber: Number
  },
  data: function () {
    return {
      title: 'this is life cycle of template syntax component',
      rawHtml: '',
      dynamicId: '',
      isButtonDisabled: '',
      seen: false,
      attr: 'class'
    }
  },
  beforeCreate: function () {
    console.log('==========beforeCreate');
    // can not get data
  },
  created: function () {
    this.rawHtml = '<span style="color:green">this should be green...</span>';
    console.log('==========created');
  },
  beforeMount: function () {
    console.log('==========beforeMount');
  },
  mounted: function () {
    console.log('==========mounted');
    this.dynamicId = '666';
    // 数据更新将会导致 update
  },
  beforeUpdate: function () {
    console.log('==========beforeUpdate');
  },
  updated: function () {
    console.log('==========updated');
    this.isButtonDisabled = false;
  },
  beforeDestroy: function () {
    console.log('==========beforeDestroy');
  },
  destroyed: function () {
    console.log('==========destroyed');
  },
  methods: {
    handleClick(event) {
      console.log('event: ', event);
      this.seen = !this.seen;
    },
    clickChange() {
      this.attr = this.attr === 'class' ? 'id' : 'class';
    },
    clickParentChange() {
      alert(this.attr);
    }
  }
}
</script>

<style scoped>
  #dynamicAttr {
    color: lightblue;
  }
  .dynamicAttr {
    color: red;
  }
</style>