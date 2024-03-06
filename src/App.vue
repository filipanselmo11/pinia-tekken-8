<script setup lang="ts">
import { useTekkenStore } from './stores/TekkenStore';
import TekkenList from './components/TekkenList.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FormComponent from './components/FormComponent.vue';
import { ref } from 'vue';
// import { TekkenInterface } from './types/types';

const tekkenStore = useTekkenStore();
tekkenStore.getLutadores();
const novoLutador = ref({})

const handleSubmit = () => {
  tekkenStore.addLutador(novoLutador)
}
</script>

<template>
  <div v-if="tekkenStore.loading">
    <h1>Carregando...</h1>
  </div>
  <div v-else>
    <NavbarComponent />
    <FormComponent :lutador="novoLutador" @handle-submit="handleSubmit" />
    <TekkenList :lutadores="tekkenStore.lutadores" />
  </div>

</template>

<style scoped></style>
