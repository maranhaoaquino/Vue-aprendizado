import DolarHoje from "./DolarHoje.js";

export default {
    name: "AcaoHoje",
    data(){
        return{
            precoAcao: 0,
            sigla: ""
        }
    },
    template: `
        <div>    
            <p>Ação: {{sigla}} - Preço USD: {{precoAcao}}</p>
            <dolar-hoje></dolar-hoje>
        </div>
    `,
    methods:{
        puxarAcao(){
            fetch("https://api.origamid.dev/stock/aapl/quote")
                .then(r => r.json())
                .then(r => {
                    this.sigla = r.symbol;
                    this.precoAcao = r.latestPrice;
                })
        }
    },
    created(){
        this.puxarAcao();
    },
    components: {
        DolarHoje
    }
}