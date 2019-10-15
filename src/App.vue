
<template>
  <div id="app">
    <!-- navbar -->
    <navbar></navbar>
    <!-- end navbar -->
    <div class="container-fluid">
      <div class="row">
        <!-- <div class="col-md-2">
          <sidebar></sidebar>
        </div> -->
        <div class="col-md-10">
          <router-view />
        </div>
        <div class="col-md-2">end content</div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/docs/navbar.vue";
import sidebar from "./components/docs/sidebar.vue";
export default {
  name: "get-started",
  components: {
    sidebar,
    navbar
  }
};
</script>

<style lang="scss" scoped>
</style>
