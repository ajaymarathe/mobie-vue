<template>
    <div :class="'modal fade bd-example-modal-'+size" :id="target"  role="dialog" :aria-labelledby="target" aria-hidden="true">
        <div :class="'modal-dialog modal-dialog-centered modal-'+size" role="document">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseModal',
        props: {
            target:String,
            size: String,
        },

    }
</script>

<style scoped>

</style>
