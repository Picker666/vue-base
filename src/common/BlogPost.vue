<template>
  <div>
    <h3 :style="{fontSize: fontSize+'px'}">{{ title }}</h3>
    <button @click="$emit('enlarge-text', 2)">enlarge text</button>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: {
      type: String,
      default: 'Blog post',
    },
    fontSize: {
      type: Number,
      default: 16
    }
  },
}
</script>