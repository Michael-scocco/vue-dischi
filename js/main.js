/*
Descrizione:
Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.
*/
const app = new Vue({
    el: '#app',
    data:{
        listaAlbum:[],
    },
    methods:{},
    mounted(){
        var i =0;
        while(i < listaAlbum.length){
            axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")//questo ci promette di darci una risposta;
            .then(response => {
                console.log(response.data.response);
                this.listaAlbum.push(response.data.response);
            }).cath(e => {//per vedere eventuali errori
                console.error(e);
    
            })
        i++;
        }; //while  
    },
})