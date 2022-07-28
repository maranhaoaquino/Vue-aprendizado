export default {
    name: "DolarHoje",
    data(){
        return{
            precoDolar: 0
        }
    },
    template: `<p>Dolar Hoje: {{precoDolar}}</p>`,
    methods:{
        puxarDolar(){
            fetch("https://api.origamid.dev/exchange/usd")
                .then(r => r.json())
                .then(r => {
                    this.precoDolar = r.rates.BRL.toFixed(2);
                })
        }
    },
    created(){
        this.puxarDolar();
    }
}