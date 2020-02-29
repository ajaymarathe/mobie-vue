<template>
    <div v-if="icon" class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" >
                <vue-fontawesome :icon="icon"></vue-fontawesome>
            </span>
        </div>
        <input class="form-control" :type="type" :value="value"
               :placeholder="placeholder" v-on:input="$emit('input', $event.target.value)">
    </div>
    <input v-else class="form-control" :type="type" :value="value"
           :placeholder="placeholder" v-on:input="$emit('input', $event.target.value)">
</template>

<script>
    export default {
        name: 'BaseInput',
        props:['value','type','placeholder','icon'],
    }
</script>

<style scoped>

</style>
