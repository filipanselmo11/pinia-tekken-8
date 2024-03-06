import { defineStore } from "pinia";
import { api } from "../services/api";
// import { TekkenInterface } from "../types/types";
export const useTekkenStore = defineStore('tekkenStore',{
    state: () => ({
        lutadores: [],
        loading: true,
    }),
    actions: {
        async getLutadores() {
            this.loading = true;
            // Consumindo api usando o fetch
            // const response = await fetch('http://localhost:3000/tekken');
            // const data = await response.json();
            // this.lutadores = data;
            // console.log('LUTADORES ', data);
            // Consumindo api usando axios
            await api.get('/tekken').then(res => {
                this.lutadores = res.data;
            }).catch(error => {
                console.log('ERROR ', error)
            });
            this.loading = false;
        },
        async addLutador(lutador) {
            // const body = {
            //     nome: '',
            //     estilo_luta: '',
            //     nacionalidade: '',
            // }
            const body = JSON.stringify(lutador)
            await api.post('/tekken', body).then(res => {
                console.log('RES', res.data);
            }).catch(error => {
                console.log('ERROR ', error);
            });
            this.loading = false;
        }
    }
});