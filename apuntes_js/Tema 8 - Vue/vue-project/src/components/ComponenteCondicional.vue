<template>
    <ComponenteA v-if="Componente==ComponenteA"/>
    <ComponenteB v-if="Componente==ComponenteB"/>
</template>

<script setup>
    import ComponenteA from './ComponenteA.vue';
    import ComponenteB from './ComponenteB.vue';

    const Componente=ComponenteA;
</script>