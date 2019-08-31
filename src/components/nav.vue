<template>
    <div>
        <!-- navbar  -->
        <nav class="nav mobie-nav d-flex align-items-center">
          <a href="home.html">
              <i @click="back()" class="material-icons ml-3">
                  arrow_back
              </i>
          </a>
          <a class="nav-link" href="#">{{title}}</a>
        </nav>
        <!-- end navbar -->
    </div>
</template>

<script>
    export default {
        name: "navbar",
        props: ['title'],
        data:function(){
            return {
                message: "navbar"
            }
        },
        methods:{
            back(){
                router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>