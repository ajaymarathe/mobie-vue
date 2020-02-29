<template>
    <div v-if="color == 'secondary' || color == 'light' " :class="[colorClass]"  role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
    </div>
    <div v-else :class="[colorClass]" :style="styleObject"  role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BaseAlert',
        props: {
            color: String,
        },
        data(){
            return {
                colorClass: "alert bg-" + this.color,
                styleObject: {
                    color: 'white',
                }
            }
        }
    }
</script>

<style scoped>

</style>
