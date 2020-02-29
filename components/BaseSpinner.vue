<template>
    <div :class="'spinner-'+type +' text-'+color" :style="StyleSpinner" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
    export default {
        name: 'BaseSpinner',
        props:{
            type: String,
            color: String,
            size: String
        },
        data(){
            return {
                StyleSpinner:{
                    height: this.size+'rem',
                    width: this.size+'rem',
                }
            }
        }
    }
</script>

<style scoped>

</style>
