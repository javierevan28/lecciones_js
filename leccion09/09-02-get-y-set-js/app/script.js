class Persona{
    constructor(nombre,apellido){
        //Para modicar se crean los metodos y las propiedades se declaran con gion bajo (-)
        this._nombre = nombre
        this._apellido = apellido
    }

    // Método GET (Obtener)
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }

    // Método SET (Asignar)
    set nombre(nombre){
         this._nombre = nombre
    }
    set apellido(apellido){
        this._apellido = apellido
    }

}
let showInformation = document.getElementById('showInformation')
let persona1 = new Persona('Javier','Arellano')
let persona2 = new Persona('Amy','Lee')

//SET

showInformation.innerHTML = `<p><b>Nombre:</b> ${persona1.nombre} <b>Apellido:</b> ${persona1.apellido}</p>`
showInformation.innerHTML += `<p><b>Nombre:</b> ${persona2.nombre} <b>Apellido:</b> ${persona2.apellido}</p>`

persona1.nombre = 'Javier Omar'
persona1.apellido = 'Moreno Arellano'
showInformation.innerHTML += `<p><b>Nombre:</b> ${persona1.nombre} <b>Apellido:</b> ${persona1.apellido}</p>`
