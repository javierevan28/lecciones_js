(loadPage = () => {
    'use strict'
    let showAnswer = document.getElementById('showAnswer')
        //Objeto
    let person = {
        // Parametros
        name: 'Javier',
        lastname: 'Arellano',
        email: 'javierdeveloper@mail.com',
        age: 36,

        //Método
        completeName: function() {
            return this.name + " " + this.lastname
        }

    }


    for (const properties in person) {
        showAnswer.innerHTML += `<p><b>${properties}</b>: ${person[properties]}</p>`
    }
})()