<template>
  <nav :class="'navbar navbar-expand-lg navbar-'+bgType +' bg-'+color">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "BaseNavbar",
  props:{
      color:String,
      bgType: String
  },
  data(){
    return {
    }
  },
  mounted(){

  },
  methods:{

  }
};
</script>

<style lang="scss" scoped>
</style>
