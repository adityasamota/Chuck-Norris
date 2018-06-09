const chucknum = new Chuck;

const number = document.getElementById('random');
const submit = document.querySelector('.submit');

submit.addEventListener('click',() =>{
    const num = number.value;
    if(num > 0){
        chucknum.getChuck('num')
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    else{
        alert('Enter a postive number');
    }
});