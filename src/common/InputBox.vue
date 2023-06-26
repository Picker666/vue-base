<script>
export default {
  name: 'InputBox',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  template: `<input type="text" :value="value" @input="$emit('input', $event.target.value)" />`
}
</script>