<template>
    <button v-if="this.type" :class="[TypeObject.color,TypeObject.size,TypeObject.display,TypeObject.type,TypeObject.variant]"
           >
        <slot></slot>
    </button>
    <button v-else :class="[classObject.color,classObject.size,classObject.display,classObject.variant]"  >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            color: String,
            size: String,
            display: String,
            type: String,
            target: String,
            variant: String
        },
        data(){
            return {
                classObject: {
                    color: "btn btn-" + this.color,
                    size: "btn-" + this.size,
                    display: "btn-"+this.display,
                    type: "btn btn-"+ this.type +'-'+ this.color,
                    variant: 'rounded-'+this.variant,
                },
                TypeObject: {
                    size: "btn-" + this.size,
                    display: "btn-"+this.display,
                    type: "btn btn-"+ this.type +'-'+ this.color,
                    variant: this.variant,
                }
            }
        },
    }
</script>

<style scoped>

</style>
