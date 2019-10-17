<template>
  <div>
    <span :class="[badge,badgeSize]">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MobieBadge",
  props: {
    color: String,
    size: String
  },
  data() {
    return {
      badge: "badge badge-" + this.color,
      badgeSize: "badge-" + this.size
    };
  }
};
</script>

<style lang="scss" scoped>
</style>