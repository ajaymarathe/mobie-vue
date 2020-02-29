<template>

        <li :data-target="'#'+target" :data-slide-to="index" class="active"></li>
<!--        <li :data-target="'#'+target" :data-slide-to="index"></li>-->
<!--        <li :data-target="'#'+target" :data-slide-to="index"></li>-->
</template>

<script>
    export default {
        name: 'SlideIndicator',
        props:{
            target: String,
            index: String,
        }
    }
</script>

<style scoped>

</style>
