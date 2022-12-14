const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
alert(boton.innerText);
    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
    selectOperacion(boton.innerText);
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeActual ==='') return;
    if(opeAnterior !==''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual ='';
}

function calcular(){
    var calcular;
    constanterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeAnterior);
    if(isNaN(anterio) || isNaN(actual)) return
    switch(operacion){
        case '+':
        calculo = anterio + actual;
        break;
        case '-':
        caluculo = anterio - actual;
        break;
        case 'x':
            calculo = anterior * actual;
            break;
            case '/':
                calculo = anterio / actual;
                break;
                default:
                return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
    opeActual = opeActual.toString( ) + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined; 
}

function actualizarDisplay(){
result.value = opeActual;
}