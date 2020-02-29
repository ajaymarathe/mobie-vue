<template>
    <div  class="progress" :style="styleSize">
        <div :class="'progress-bar bg-'+color +' progress-bar-'+type +' progress-bar-'+animation" role="progressbar" :style="styleObject" ></div>
    </div>
</template>

<script>
    export default {
        name: 'BaseProgress',
        props:{
            width: String,
            color:String,
            type:String,
            animation: String,
            size: String,
        },
        data(){
            return{
                styleObject: {
                    width: this.width+'%',
                },
                styleSize:{
                    height: this.size+'rem'
                }
            }
        },
    }
</script>

<style scoped>

</style>
