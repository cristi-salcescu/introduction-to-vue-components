<template>
  <input @input="triggerInputEvent" v-model="currentValue" />
</template>

<script>
export default {
  prop: ['value'],
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    triggerInputEvent (e) {
      this.$emit("input", this.currentValue)
    }
  }
}
</script>