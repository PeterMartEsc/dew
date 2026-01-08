<template>
    <div class="hijo-component">
        <h2>Componente Hijo</h2>
        <label for="">Escribe algo</label>
        <input :value="model" @input="onInput">
        
        <label for="Nombre"></label>
        <input v-model="nombre" @input="sendData" placeholder="Nombre">

        <label for="DNI">DNI</label>
        <input v-model="dni" @input="sendData" placeholder="DNI">
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    
    /**
     * Tipado de emits
     */

    const emit = defineEmits<{
        'change-text': [value: string];
        'send-person': [{nombre: string; dni: string}];
    }>()

    const model = ref('');
    const nombre = ref('');
    const dni = ref('');

    function onInput(e: Event){
        const value = (e.target as HTMLInputElement).value
        model.value = value;

        emit('change-text', value)
    }

    function sendData(e: Event){
        emit('send-person', {nombre : nombre.value, dni : dni.value});
    }

</script>

<style scoped>

</style>