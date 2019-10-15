<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "MobieButtons",
  props: {
    color: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>