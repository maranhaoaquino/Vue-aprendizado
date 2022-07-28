export default {
    name: "TempoHoje",
    data(){
        return{
            tempo: {}
        }
    },
    template: `<p>Rio de Janeiro, máxima de: {{tempo}}ºC</p>`,
    methods:{
        puxarTempo(){
            fetch("https://api.origamid.dev/weather/rio")
                .then(r => r.json())
                .then(r => {
                    this.tempo = r.consolidated_weather[0].max_temp.toFixed(2);
                })
        }
    },
    created(){
        this.puxarTempo();
    }
}