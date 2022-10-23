let vetor = [];
//inserir
function Insira() {
    let pri = Number(document.getElementById("input1").value);
    vetor.push(pri);
    //verificação no console
    console.log('inserio =', vetor);
    Mostrar(vetor)
}
//remover
function Remover() {
    let remo = vetor.pop();
    //verificação no console
    console.log('remover =', vetor);
    Mostrar(remo);
}
//inverter
function Inevert() {

    let reversed = vetor.reverse();
    //verificação no console
    console.log('reversed =', reversed);
    Mostrar(reversed);
}
//mostrar
function Mostrar() {
    document.getElementById('lista').innerHTML = vetor.join(', ');
}
