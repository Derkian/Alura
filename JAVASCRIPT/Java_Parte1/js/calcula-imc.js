function calculaImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}