<template>
    <div class="padre-component">
        <h2>Componente Padre</h2>
        <p>Contenido del componente</p>
        <HijoComponent @change-text="onChildText" @send-person="onRecievePerson"/>
        <p>
            <strong>Texto recibido del hijo</strong>
            <br>
            {{ childText }}
        </p>
        <div v-if="persona">
            <p><strong>Nombre: </strong>{{ persona.nombre }}</p>
            <p><strong>DNI: </strong>{{ persona.dni }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import HijoComponent from './HijoComponent.vue';

    // const emit = defineEmits()

    type Persona = {
        nombre: string
        dni: string
    }

    const childText = ref('')
    const persona = ref<Persona | null>(null)


    function onChildText(value: string){
        childText.value = value;
    }

    function onRecievePerson(value: Persona){
        persona.value = value;
    }
</script>

<style scoped>

</style>