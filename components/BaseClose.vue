<template>
    <button type="button" class="close" :data-dismiss="dismiss" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</template>

<script>
    export default {
        name: "BaseClose",
        props: {
            dismiss: String
        }
    }
</script>

<style scoped>

</style>
