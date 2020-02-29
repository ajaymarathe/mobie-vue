<template>
    <div :class="'tab-pane fade show '+tab" :id="section" role="tabpanel" aria-labelledby="home-tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabContent",
        props: {
            section:String,
            tab: {
                type: String,
            }
        },
    }
</script>

<style scoped>

</style>
