<template>
    <div>
        <ul>
            <li @click="componenteAtivo = 'PaginaSobre'">Sobre</li>
            <li @click="componenteAtivo = 'PaginaServicos'">Serviços</li>
        </ul>
        <transition mode="out-in">
            <component :is="componenteAtivo"></component>
        </transition>
    </div>    
</template>

<script>
import PaginaSobre from './PaginaSobre.vue';
import PaginaServicos from './PaginaServicos.vue';
import Componentes from './componentes.vue';

export default {
    components:{
        PaginaSobre,
        PaginaServicos,
        Componentes
    },
    data(){
        return{
            componenteAtivo: "PaginaSobre"
        }
    }
}
</script>

<style>
    .v-enter-active,
    .v-leave-to{
        transition: all 0.3s;
    }

    .v-enter,
    .v-leave-to{
        opacity: 0;
        transform: translate3d(0, -20px, 0);
    }
</style>