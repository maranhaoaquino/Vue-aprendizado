<template>
    <div class="modal">
        <slot name="header" :logo="logo"></slot>
        <h1>{{user}}</h1>
        <slot :user="user"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default{
    name: "ModalPrincipal",
    data(){
        return{
            logo: "Techno",
            user: {
                nome: "André"
            }
        }
    }
}
</script>

<style>
</style>