const showInformation = document.getElementById('showInformation')

let persona = {
    name: 'Javier',
    lastname: 'Arellano',
    email: "javierdeveloper@mail.com",
    age: 36
}

//Para acceder a la propiedad nombre colocamos.


showInformation.innerHTML = `<p>
                                <b>Nombre: </b> ${persona.name} <br>
                                <b>Apellido:</b> ${persona.lastname}<br>
                                <b>Correo:</b> ${persona.email}<br>
                                <b>Edad: </b> ${persona.age} <br>
                            </p>`