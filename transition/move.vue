<template>
    <div>
        <button @click="filtroAZ">A - Z</button>
        <button @click="filtroZA">Z - A</button>
        <transition-group tag="ul">
            <li v-for="filme, index in filmes" :key="filme.nome">
                <p>{{filme.nome}}</p>
                <p>{{produto.preco}}</p>
                <button @click="remover(index)">Remover</button>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data(){
        return{
            filmes: ["O senhor dos aneis", "As crônicas de Nárnia", "Coração Valente", "Harry Potter"]
        }
    },
    methods: {
        filtroAZ(){
            this.filmes.sort();
        },
        filtroZA(){
            this.filmes.sort().reverse();
        }
    }
}
</script>

<style>
.v-move{
    transition: transform 0.3s;
}
li{
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    background: #fff;
    padding: 20px;
    max-width: 200px;
    margin-bottom: 10px;
}
</style>