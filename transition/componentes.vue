<template>
    <div>
        <button @click="estoque++">Adicionar estoque</button>
        <button @click="estoque = 0">Deletar estoque</button>
        <transition mode="out-in">
            <p v-if="estoque >= 5" key="estoque">Itens em estoque</p>
            <p v-else-if="estoque > 1 && estoque < 5 " key="acabando">Itens quase acabando</p>
            <p v-else key="esgotado">Produtos fora de estoque</p>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            estoque: 0
        }
    }
}
</script>

<style>
</style>