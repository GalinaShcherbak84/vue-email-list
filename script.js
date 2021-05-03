const app = new Vue({
    el: '#app',
    data:{

    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(result=>{
            console.log(result)
            console.log(result.data.response)
        })
        .catch(error=>{
            console.log('Errore',error);
        })
    }
});