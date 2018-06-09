class Chuck {
    constructor(){
        this.message = message;
    }
    async getChuck(number){
        const jokeresponse = await fetch(`http://api.icndb.com/jokes/random/${this.number}`);
        const res = await jokeresponse.json();
        let a;
        if(res.type === 'success'){
            a = res.value.joke;
            this.message.innerHTML = `<p>${a}</p>`;
        }
        else{
            console.log('Something went wrong');
        }
}
}