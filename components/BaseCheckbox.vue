<template>
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  />
</template>

<script>
export default {
  name: "BaseCheckbox",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  }
};
</script>

<style scoped>
</style>