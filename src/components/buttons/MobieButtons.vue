<template>
  <div>
    <button :class="[classObject.color,classObject.size,classObject.display]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "MobieButtons",
  props: {
    color: String,
    size: String,
    display: String,
  },
  data() {
    return {
      classObject: {
        color: "btn btn-" + this.color,
        size: "btn-" + this.size,
        display: "btn-"+this.display
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>