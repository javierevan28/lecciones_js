const mouth = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let userMounth
let mouth2
let answer = document.getElementById('answer')

const season = (mouth2) => {
    switch(mouth2){
        case 0: case 1: case 11:
            answer.innerHTML = '<p>El mes es '+mouth[mouth2]+' y la estación es Invierno</p>'
        break
        case 2: case 3: case 4:
            answer.innerHTML = '<p>El mes es '+mouth[mouth2]+' y la estación es Primavera</p>'
        break
        case 5: case 6: case 7:
            answer.innerHTML = '<p>El mes es '+mouth[mouth2]+' y la estación es Verano</p>'
        break
        case 8: case 9: case 10:
            answer.innerHTML = '<p>El mes es '+mouth[mouth2]+' y la estación es Otoño</p>'
        break
        default:
            askMouth()
    }
}

const verifyNumber = (mouth2) => {
    if(isNaN(mouth2)){
        askMouth()
    }
    else{
        mouth2 = mouth2 - 1
        season(mouth2)
    }
}

const askMouth = () => {
    userMounth = prompt('Introduce un mes')
    mouth2 = Number(userMounth)
    verifyNumber(mouth2)
}

window.onload = () =>{
    askMouth()
}