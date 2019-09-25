<template>
  <div class="alert" :class="color">{{ content }}</div>
</template>

<script>
export default {
  name: "m-alert",
  props: ["color", "content"]
};
</script>

<style lang="scss" scoped>
</style>