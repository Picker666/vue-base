<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
<!-- 多行 -->
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ multilineMessage }}</p>
    <br>
    <textarea v-model="multilineMessage" placeholder="add multiple lines"></textarea>
<!-- checkbox -->
    <br>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
<!-- 多个checkbox -->
    <br>
    <input type="checkbox" id="picker" value="picker" v-model="checkedNames">
    <label for="picker">Picker</label>
    <input type="checkbox" id="christine" value="christine" v-model="checkedNames">
    <label for="christine">Christine</label>
    <input type="checkbox" id="borry" value="borry" v-model="checkedNames">
    <label for="borry">Borry</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
<!-- 单选 -->
    <br>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
<!-- 下拉 -->
    <br>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
<!-- 下拉多选 -->
    <br>
    <select v-model="multipleSelected" multiple style="width: 50px;">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <select v-model="multipleSelected" style="width: 50px;">
      <option v-for="op in options" :key="op.value" :value="op.value">{{ op.text }}</option>
    </select>
    <br>
    <span>Selected: {{ multipleSelected }}</span>

    <br>
    <input v-model.lazy="msg" @input="msgInput" @change="msgChange">
    <input v-model="msg" @input="msgInput" @change="msgChange">
    <hr>
  </div>
</template>

<script>

export default {
  name: "FormInputBind",
  props: {
    serialNumber: Number
  },
  data: function () {

    return {
      title: 'Form Input Bind',
      message: '',
      multilineMessage: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      multipleSelected: [],
      msg: ''
    }
  },
  methods: {
    msgInput(event) {
      console.log('event: ', event.target.value);
      console.log('this.msg', this.msg);
    },
    msgChange(event) {
      console.log('event: ', event.target.value);
      console.log('this.msg', this.msg);
    }
  }
}
</script>
