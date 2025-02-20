<template>
    <p :id :class="miClase">Botoncito verde</p>
    <button :disabled="disabled"></button>
    <input type="text" :value="nombre" :name="nombre" @input="actualizar" />
    <img :src="imagen.src" :alt="imagen.alt" :width="imagen.width" :height="imagen.height" />
</template>

<script setup>
    const miClase="especial";
    const id="rojo";
    const disabled=false;

    const nombre="Alejandro";

    const actualizar = () => {
        console.log("Actualizando");
    }

    const imagen = {
        src: "../assets/logo.svg",
        alt: "El logo de Vue chiquito",
        width: 50,
        height: 50
    } 
</script>

<style scoped>
    p {
        background-color: lightgreen;
        color: black;
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
</style>