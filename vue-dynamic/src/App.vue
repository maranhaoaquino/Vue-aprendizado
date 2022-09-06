<template>
  <div id="app">
    <button @click="componenteAtivo = 'SobreEmpresa'">Empresa</button>
    <button @click="componenteAtivo = 'SobreServicos'">Servicos</button>
    <button @click="componenteAtivo = 'SobreContato'">Contato</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import SobreEmpresa from "./components/SobreEmpresa.vue";

export default {
  name: "app",
  components: {
    SobreEmpresa,
    SobreServicos:defineAsyncComponent(() =>
      import('./components/SobreServicos.vue')
    ),
    SobreContato: defineAsyncComponent(() =>
      import('./components/SobreContato.vue')
    )
  },
  data(){
    return{
      componenteAtivo: "SobreEmpresa"
    }
  }
};
</script>

<style>

</style>
