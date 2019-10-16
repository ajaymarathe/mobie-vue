<template>
  <div>
    <button :class="[classObject.color,classObject.size]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "MobieButtons",
  props: {
    color: String,
    size: String
  },
  data() {
    return {
      classObject: {
        color: "btn btn-" + this.color,
        size: "btn-" + this.size
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>