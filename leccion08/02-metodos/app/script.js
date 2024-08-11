(loadPage = () => {
    'use strict'
    const showAnswer = document.getElementById('showAnswer')

    //Objeto
    let person = {
        // Parametros
        name: 'Javier',
        lastname: 'Arellano',
        email: 'javierdeveloper@mail.com',
        age: 36,

        //Metodos
        completeName: function() {
            return this.name + " " + this.lastname
        }
    }


    showAnswer.innerHTML = `<p>${person.completeName()}</p>`
})()