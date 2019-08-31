<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "App",
  components: {

  },
  data:function(){
    return {
      title: "Home"
    }
  }
};
</script>
