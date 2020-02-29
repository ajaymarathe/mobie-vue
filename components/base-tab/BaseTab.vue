<template>
    <div>
        <ul class="nav nav-tabs nav-pills" id="myTab" role="tablist">
            <slot name="tab-item"></slot>
        </ul>
        <div class="tab-content p-3" id="myTabContent">
            <slot name="tab-content">
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseTab",
    }
</script>

<style scoped>

</style>
