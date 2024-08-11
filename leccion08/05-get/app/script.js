(loadPage=()=>{
    const showAnswer = document.getElementById('showAnswer')
    let person = {
        name:'Javier',
        lastname:'Arellano',
        get completeName(){
            return this.name+' '+this.lastname
        }
    }
    showAnswer.innerHTML +=`<p>${person.completeName}</p>`
})()