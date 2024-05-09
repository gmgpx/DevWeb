document.getElementById('calcular').addEventListener('click', function() {

    var salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    var dependentes = parseInt(document.getElementById('dependentes').value);

    var inss = calcularINSS(salarioBruto);
    var irrf = calcularIRRF(salarioBruto, dependentes, inss);
    var salarioLiquido = salarioBruto - inss - irrf;

    // Atualiza os valores nos campos de entrada com os resultados dos cálculos, formatando-os com duas casas decimais
    document.getElementById('inss').value = inss.toFixed(2);
    document.getElementById('irrf').value = irrf.toFixed(2);
    document.getElementById('salarioLiquido').value = salarioLiquido.toFixed(2);
});

// Função para calcular a contribuição para o INSS com base no salário bruto
function calcularINSS(salarioBruto) {
    var inss;
    if (salarioBruto <= 1412) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        inss = (salarioBruto * 0.09) - 21.18;
    } else if (salarioBruto <= 4000) {
        inss = (salarioBruto * 0.12) - 101.18;
    } else if (salarioBruto <= 7786) {
        inss = (salarioBruto * 0.14) - 181.18;
    } else {
        inss = 0; // Valor min de contribuição para o INSS
    }
    return inss; // Retorna o valor da contribuição para o INSS
}

// Função para calcular o IRRF com base no salário bruto, número de dependentes e contribuição para o INSS
function calcularIRRF(salarioBruto, dependentes, inss) {
    var baseCalculo = salarioBruto - (dependentes * 189.59) - inss; // Calcula a base de cálculo para o IRRF
    var irrf;
    if (baseCalculo <= 2112) {
        irrf = 0; // Isento de IRRF
    } else if (baseCalculo <= 2826.65) {
        irrf = (baseCalculo * 0.075) - 158.40;
    } else if (baseCalculo <= 3751.05) {
        irrf = (baseCalculo * 0.15) - 370.40;
    } else if (baseCalculo <= 4664.68) {
        irrf = (baseCalculo * 0.225) - 651.73;
    } else {
        irrf = baseCalculo * 0.275 - 884.96;
    }
    return irrf; // Retorna o valor do IRRF
}
