<template>
  <input
    type="radio"
    :name="name"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
    :value="value"
  />
</template>

<script>
export default {
  name: "BaseRadio",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean,
    name: String,
    value: String
  }
};
</script>

<style scoped>
</style>