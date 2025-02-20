<template>
    <button id="miBoton" @click="saluda" @mouseover='console.log("Hola desde la consola")' @click.left="atiendeEvento">Púlsame</button>
</template>

<script setup>
    const saluda = () => {
        alert("Pichurrilla");
    }

    const atiendeEvento = (evento) => {
        console.log(evento.target.tagName);
    }
</script>

<style scoped>
    button {
        background-color: rgb(66, 195, 237);
        color: black;
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
</style>