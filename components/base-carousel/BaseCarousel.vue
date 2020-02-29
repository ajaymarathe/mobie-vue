<template>
    <div :id="target" :class="'carousel slide carousel-'+animation" data-ride="carousel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BaseCarousel",
        props:{
            target: String,
            animation:String
        },
    }
</script>

<style scoped>

</style>
