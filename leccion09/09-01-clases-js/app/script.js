// Creamos nuestra clase, ponemos la primera letra de clase en mayusculas
class Persona{
    // Debe llevar un constructor
    constructor (nombre,apellido){
        // Las variables son propiedades
        this.nombre = nombre
        this.apellido = apellido
    }
}

// Creamos un objeto
let persona1 = new Persona('Javier','Arellano') 
console.log(persona1)

//Segundo objeto
let persona2 = new Persona('Amy','Lee')

let answer = document.getElementById('answer')

// Para acceder a las propiedas es el objeto + punto (.) y la propiedad
answer.innerHTML = '<p>'+persona1.nombre + ' '+ persona1.apellido +'</p>'

answer.innerHTML += '<p>'+persona2.nombre + ' '+ persona2.apellido +'</p>'