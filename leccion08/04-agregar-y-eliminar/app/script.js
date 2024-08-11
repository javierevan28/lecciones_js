(loadPage =()=>{
    'use strict'
    const showAnswer = document.getElementById('showAnswer')
    
    let person = {
        // Propiedades
        name:'Jaivier',
        lastname:'Arellano',
        email:'joma@joma.com',
        age:36,
        // Metodos
        completeName:function(){
            return this.name+' '+this.lastname
        }
    }

    for (const properties in person){
        showAnswer.innerHTML +=`<p><b>${properties}:</b> ${person[properties]}</p>`
    }

    // Agregando otra propiedad
    person.tel = 7772517476
    showAnswer.innerHTML +='<h2>Datos con el nuevo elemento</h2>'
    for (const properties in person){
        showAnswer.innerHTML +=`<p><b>${properties}:</b> ${person[properties]}</p>`
    }

    // Borrar valor
    delete person.email
    showAnswer.innerHTML +='<h2>Datos sin el elemento email</h2>'
    for(const properties in person)
    {
        showAnswer.innerHTML +=`<p><b>${properties}:</b> ${person[properties]}</p>`
    }

})()