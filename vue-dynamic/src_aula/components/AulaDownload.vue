<template>
    <div>
        <p>Faça o download dos arquivos</p>
        <button>Download</button>
    </div>
  </template>
  
  <script>
    export default {
        name: "AulaDownload",
        created() {
            console.log("Download criado");
        },
        unmounted() {
            console.log("Download destruído");
        }
    };
  </script>
  
  <style>
  
  </style>
  