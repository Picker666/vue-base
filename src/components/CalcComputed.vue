<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
    <p>origin message: "{{ message }}</p>
    <p>reverse message: "{{ reverseMessage }}"</p>
    <p>methods reverse message: "{{ reverseMsg() }}"</p>
    <div><button @click="changeMessage">change message</button></div>
    <p @click="changeName">full name: "{{ fullName }}"</p>

    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
    <hr>
  </div>
</template>

<!-- 
computed - 计算属性：监听属性变化，每次变化自动计算得到属性的值；默认是getter，可以设置setter
methods - 方法：根据需要从新执行方法，获取到方法的执行结果；
watch - 侦听属性：根据监听的属性变化执行对应的方法；
-->

<script>
import { debounce, capitalize } from 'lodash';
import axios from 'axios';

export default {
  name: 'CalcComputed',
  props: {
    serialNumber: Number
  },
  data: function () {
    return {
      title: 'calculate and computed page',
      message: 'Hello world!',
      firstName: 'Picker',
      lastName: 'Ren',
      // fullName: 'Picker Ren',

      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    }
  },
  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('');
    },
    // fullName: function () {
    //   return this.firstName + ' ' + this.lastName;
    // }
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  created: function () {
    this.debounceAnswer = debounce(this.getAnswer, 1000);
  },
  methods: {
    changeMessage: function () {
      this.message = 'Hi, Picker, long time no see!'
    },
    reverseMsg() {
      return this.message.split('').reverse().join('');
    },
    changeName: function () {
      this.fullName = 'Christine Tang';
    },

    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
    },

    question: function (val) {
      this.answer = 'Waiting for you to stop typing...'
      this.debounceAnswer(val);
    }
  }
}
</script>
