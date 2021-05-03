const app = new Vue({
    el: '#app',
    data:{
        mails:[],
        
    },
    created(){
        for(let i = 0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result=>{
                //console.log(result)
                console.log(result.data.response)
                this.mails.push(result.data.response)
            })
            .catch(error=>{
            console.log('Errore',error.l);
            })
        }
        
    },
    
});