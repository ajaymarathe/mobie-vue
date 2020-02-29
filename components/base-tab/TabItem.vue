<template>
    <li class="nav-item">
        <a :class="'nav-link '+tab"   data-toggle="tab" :href="'#'+target" role="tab"  :aria-controls="target" aria-selected="true">
            <slot></slot>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'TabItem',
        props:{
            target:String,
            tab: String,
        }
    }
</script>

<style scoped>

</style>
