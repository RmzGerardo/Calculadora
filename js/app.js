function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';
    console.log(resultado);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';
    console.log(resultado);
    document.getElementById('resultado').innerHTML = `Resultado:  ${resultado}`;
}

function mul(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';
    console.log(resultado);
    document.getElementById('resultado').innerHTML = `Resultado:  ${resultado}`;
}