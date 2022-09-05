<template>
  <div id="app">
    <modal-principal>
      <template v-slot:header="{logo}">{{logo}}</template>
      <template v-slot:default="{user}">
        <h1>{{user.nome}}</h1>
        <p>Esse é um teste</p>
        <button>Comprar</button>
      </template>
      <template #footer>Esse é o footer</template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  name: "app",
  components: {
    ModalPrincipal
  }
}
</script>

<style>

</style>
