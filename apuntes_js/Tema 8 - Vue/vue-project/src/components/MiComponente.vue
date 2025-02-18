<script setup>
    import Boton from './Boton.vue';
    const msg = "Hola mundo jeje";

    const persona = {
        nombre: "Juan",
        edad: 30
    }

    function saluda() {
        return "Hola desde la funcion saluda";
    }
</script>

<template>
    <article class="flex-columna borde">
        <p>{{ msg }}</p>
        <p>{{ saluda() }}</p>
        <p>{{ "hola".toUpperCase() }}</p>
        <p>{{ persona.nombre }}</p>
        <Boton />
    </article>
</template>

<style scoped>
    .flex-columna {
        display: flex;
        flex-direction: column;
    }

    .borde {
        border: 2px solid green ;
    }
</style>