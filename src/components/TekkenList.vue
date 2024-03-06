<script setup lang="ts">
import { TekkenInterface } from '../types/types';
defineProps<{lutadores: TekkenInterface[]}>()

</script>

<template>
    <div class="tekken-list">
        <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Estilo de luta</th>
                <th scope="col">Nacionalidade</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="(item, index) in lutadores" :key="index">
                <td>{{  index  }}</td>
                <td>{{  item.nome  }}</td>
                <td>{{  item.estilo_luta  }}</td>
                <td>{{  item.nacionalidade  }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<style scoped>
.tekken-list {
   margin-top: 20px;
   margin-left: 30px;
}
</style>