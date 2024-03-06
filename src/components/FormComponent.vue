<script lang="ts" setup>
// import { TekkenInterface } from '../types/types';

defineProps<{lutador: any}>()
const emits = defineEmits(['handleSubmit']);

const handleSubmit = () => {
    emits('handleSubmit')    
}

</script>

<template>
    <div class="form-component">
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="nome" class="form-label">
                    Nome
                </label>
                <input
                    v-model="lutador.nome"
                    type="text"
                    class="form-control"
                    id="nome">
            </div>
            <div class="mb-3">
                <label for="estilo-luta" class="form-label">
                    Estilo de luta
                </label>
                <input
                    v-model="lutador.estilo_luta"
                    type="text"
                    class="form-control"
                    id="estilo-luta">
            </div>
            <div class="mb-3">
                <label for="nacionalidade" class="form-label">
                    Nacionalidade
                </label>
                <input
                    v-model="lutador.nacionalidade"
                    type="text"
                    class="form-control"
                    id="nacionalidade">
            </div>
            <button type="submit" class="btn btn-primary">
                Add
            </button>
        </form>
    </div>
</template>

<style scoped>
.form-component {
    margin-top: 20px;
    margin-left: 30px;
}
</style>