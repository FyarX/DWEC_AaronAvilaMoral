<template>
    <li v-for="(asignatura, index) in asignaturas " :key="index"> 
        {{asignatura}}
    </li>

    <li v-for="(verdura, index) in verduras" :key="index">
        {{verdura.nombre}} - {{verdura.precio}}
    </li>
</template>

<script setup>
    const asignaturas = ["DEWC", "DIW", "DAW", "DWES"];

    const verduras = [
        {nombre: "Lechuga", precio: 1.5},
        {nombre: "Tomate", precio: 2},
        {nombre: "Pepino", precio: 1.75},
        {nombre: "Zanahoria", precio: 1.25}
    ]
</script>

<style scoped>
    li {
        background-color: lightblue;
        color: black;
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        list-style: none;
    }
</style>