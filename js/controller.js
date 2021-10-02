function calcular(){
    var peso =  parseInt(document.formImc.numPeso.value);
    var alturaAux = document.formImc.numAltura.value;
    var altura = parseFloat(alturaAux.replace(',', '.'));
    var imc = peso / (altura**2);
    

    if (imc < 18.5) {
        situacao = 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Normal';
    } else if (imc > 24.9 && imc <= 30) {
        situacao = 'Sobrepeso';
    } else {
        situacao = 'Obesidade';
    }

    var spanResultado = document.getElementById("resultado");   
    spanResultado.innerHTML = situacao;
    
}