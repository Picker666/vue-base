<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
    <ul id="example-1" key="1">
      <li v-for="(item, index) in items" :key="item.message">
        {{ index + '、' + item.message }}
      </li>

      <li v-for="(item, index) of items" :key="item.message">
          {{ index + '、' + item.message }}
      </li>
  </ul>
  <p><button @click="changeArr">change array</button></p>
  <p><button @click="filter">filter array</button></p>


  <ul id="v-for-object" class="demo" key="2">
    <li v-for="(val, name, index) in object" :key="val">
      {{ name }} : {{ val }}:{{ index }}
    </li>
  </ul>

  <ul v-for="(set, index) in sets" :key="index">
    <li v-for="n in even(set)" :key="n">{{ n }}</li>
  </ul>

  <div>
    <span v-for="n in 10" :key="n">{{ n }} </span>
  </div>
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
      title: 'List render',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
    }
  },
  methods: {
    changeArr() {
      this.items.push({ message: 'Picker' })
    },
    filter() {
      // 你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。
      this.items = this.items.filter(itm => !itm.message.match(/o/))
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>
