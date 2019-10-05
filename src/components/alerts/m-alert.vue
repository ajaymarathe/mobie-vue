<template>
  <div :class="[colorClass]" role="alert">
    <close-button v-show="dismissibleMethod"></close-button>
    {{ content }}
    <slot></slot>
  </div>
</template>

<script>
import CloseButton from "./CloseButton";
export default {
  name: "MobieAlert",
  components: {
    CloseButton
  },
  props: {
    color: String,
    content: String,
    dismissible: String
  },
  data() {
    return {
      colorClass: "alert alert-" + this.color,
      dismissibleMethod: false
    };
  },
  mounted() {
    this.Dismissible();
  },
  methods: {
    Dismissible() {
      if (this.dismissible == "show") {
        this.dismissibleMethod = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>