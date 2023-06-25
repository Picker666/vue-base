<template>
  <div>
    <h1>{{ serialNumber + '、' + title }}</h1>
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

    }
  }
}
</script>
