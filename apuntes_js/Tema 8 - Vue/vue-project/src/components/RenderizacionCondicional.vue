<template>
    <input type="text" v-model="nombre" id="">
    </br>
    <!-- Checkbox que al marcarlo aparece en el p -->
    <input type="checkbox" v-model="mostrar" >
    <p>Tu nombre es {{ nombre }}</p> 
    <p v-if="mostrar">Raviolis rellenos</p>
</template>

<script setup>
    import { ref } from 'vue';
    const nombre = ref("");

    const mostrar = ref(false);
</script>

<style scoped>

</style>