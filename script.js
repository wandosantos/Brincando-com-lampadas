

const lampOn = document.getElementById('lampOn')
const lampOf = document.getElementById('lampOf')
const lamp = document.getElementById('lamp')


const isLampBrook = ()=>{
    return lamp.src.indexOf('quebrada') > -1
}

const acesa = ()=>{
    if(!isLampBrook()){
        lamp.src = './img/ligada.jpg'
    }
}

const apagada= ()=>{
    if(!isLampBrook()){
        lamp.src = './img/desligada.jpg'
    }
}

const quebro = ()=>{
    lamp.src = './img/quebrada.jpg'
}

lampOn.addEventListener('click', acesa)
lampOf.addEventListener('click', apagada)
lamp.addEventListener('mouseover', acesa)
lamp.addEventListener('mouseleave', apagada)
lamp.addEventListener('dblclick', quebro)
