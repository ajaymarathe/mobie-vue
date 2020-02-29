<template>
    <a :class="'carousel-control-'+type" :href="'#'+target" role="button" :data-slide="type">
        <span :class="'carousel-control-'+type+'-icon'" aria-hidden="true"></span>
        <span class="sr-only">{{title}}</span>
    </a>
</template>

<script>
    export default {
        name: 'CarouselSlide',
        props:{
            target: String,
            title: String,
            type:String,
        }
    }
</script>

<style scoped>

</style>
