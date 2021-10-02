function calcular(){
    var peso =  parseInt(document.formImc.numPeso.value);
    var alturaAux = document.formImc.numAltura.value;
    var altura = parseFloat(alturaAux.replace(',', '.'));
    var imc = peso / (altura**2);
    

    if (imc < 18.5) {
        situacao = 'Magreza';
        document.getElementById("manipula").style.backgroundColor = "blue";
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Normal';
        document.getElementById("manipula").style.backgroundColor = "green";
    } else if (imc > 24.9 && imc <= 30) {
        situacao = 'Sobrepeso';
        document.getElementById("manipula").style.backgroundColor = "red";
    } else {
        situacao = 'Obesidade';
        document.getElementById("manipula").style.backgroundColor = "purple";
    }

    var spanResultado = document.getElementById("resultado");   
    spanResultado.innerHTML = situacao;
    
}