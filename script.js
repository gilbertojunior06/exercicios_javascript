// Exercício 01 - IMC
let peso = 70, altura = 1.75;
console.log("01 - IMC:", peso / (altura * altura));

// Exercício 02 - Conversor de Temperatura
let celsius = 30;
console.log("02 - Fahrenheit:", (celsius * 9/5) + 32);

// Exercício 03 - Média Simples
let nota1 = 8, nota2 = 7, nota3 = 9;
console.log("03 - Média:", (nota1 + nota2 + nota3) / 3);

// Exercício 04 - Troca de Valores
let a = 5, b = 10;
[a, b] = [b, a];
console.log("04 - Troca:", "a =", a, "b =", b);

// Exercício 05 - Área do Círculo
const raio = 4;
console.log("05 - Área círculo:", Math.PI * raio ** 2);

// Exercício 06 - Nome Completo
let nome = "Gilberto", sobrenome = "Junior";
console.log("06 - Nome completo:", `${nome} ${sobrenome}`);

// Exercício 07 - Idade
let anoNascimento = 1990, anoAtual = new Date().getFullYear();
console.log("07 - Idade:", anoAtual - anoNascimento);

// Exercício 08 - Desconto
let preco = 100, desconto = 20;
console.log("08 - Preço final:", preco - (preco * desconto / 100));

// Exercício 09 - Conversor de Moeda
let reais = 200, taxaCambio = 5.0;
console.log("09 - Dólares:", reais / taxaCambio);

// Exercício 10 - Sucessor e Antecessor
let numero = 15;
console.log("10 - Antecessor:", numero - 1, "Sucessor:", numero + 1);

// Exercício 11 - Dias em Horas
let dias = 5;
console.log("11 - Horas:", dias * 24);

// Exercício 12 - Salário
let valorHora = 50, horasMes = 160;
console.log("12 - Salário bruto:", valorHora * horasMes);

// Exercício 13 - Paridade
let num = 8;
console.log("13 - Paridade:", num % 2 === 0 ? "Par" : "Ímpar");

// Exercício 14 - Gorjeta
let conta = 120;
console.log("14 - Total c/ gorjeta:", conta + (conta * 0.10));

// Exercício 15 - Perímetro Retângulo
let largura = 10, alturaRet = 5;
console.log("15 - Perímetro:", 2 * (largura + alturaRet));

// Exercício 16 - Conversor de Metros
let metros = 2;
console.log("16 - cm:", metros * 100, "mm:", metros * 1000);

// Exercício 17 - Combustível
let distancia = 300, consumoMedio = 15;
console.log("17 - Litros gastos:", distancia / consumoMedio);

// Exercício 18 - Reajuste Salarial
let salarioAtual = 2000;
console.log("18 - Novo salário:", salarioAtual * 1.15);

// Exercício 19 - Tempo de Viagem
let distanciaViagem = 240, velocidadeMedia = 80;
console.log("19 - Tempo viagem:", distanciaViagem / velocidadeMedia, "h");

// Exercício 20 - Divisor de Conta
let valorConta = 300, pessoas = 4;
console.log("20 - Cada paga:", valorConta / pessoas);

// Exercício 21 - Idade em Dias
let idadeAnos = 25;
console.log("21 - Idade em dias:", idadeAnos * 365);

// Exercício 22 - Área Triângulo
let base = 10, alturaTri = 6;
console.log("22 - Área triângulo:", (base * alturaTri) / 2);

// Exercício 23 - Potenciação
let baseNum = 2, expoente = 5;
console.log("23 - Potenciação:", baseNum ** expoente);

// Exercício 24 - Inversão de String
let palavra = "JavaScript";
console.log("24 - Tipo:", typeof palavra, "Tamanho:", palavra.length, "Invertida:", palavra.split("").reverse().join(""));

// Exercício 25 - Preço de Venda
let custo = 100, margemLucro = 20;
console.log("25 - Preço venda:", custo + (custo * margemLucro / 100));

// 01 - IMC
function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  if (!peso || !altura) {
    document.getElementById("resultadoIMC").innerText = "Preencha os campos!";
    return;
  }
  let imc = peso / (altura * altura);
  document.getElementById("resultadoIMC").innerText = "Seu IMC é: " + imc.toFixed(2);
}

// 02 - Conversor de Temperatura
function converterTemp() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    document.getElementById("resultadoTemp").innerText = "Digite a temperatura!";
    return;
  }
  let fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("resultadoTemp").innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// 03 - Média Simples
function calcularMedia() {
  let n1 = parseFloat(document.getElementById("nota1").value);
  let n2 = parseFloat(document.getElementById("nota2").value);
  let n3 = parseFloat(document.getElementById("nota3").value);
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultadoMedia").innerText = "Digite todas as notas!";
    return;
  }
  let media = (n1 + n2 + n3) / 3;
  document.getElementById("resultadoMedia").innerText = "Média: " + media.toFixed(2);
}

// 04 - Troca de Valores
function trocarValores() {
  let a = document.getElementById("valorA").value;
  let b = document.getElementById("valorB").value;
  [a, b] = [b, a];
  document.getElementById("resultadoTroca").innerText = `Agora A = ${a}, B = ${b}`;
}

// 05 - Área do Círculo
function calcularAreaCirculo() {
  let raio = parseFloat(document.getElementById("raio").value);
  if (!raio) {
    document.getElementById("resultadoCirculo").innerText = "Digite o raio!";
    return;
  }
  let area = Math.PI * raio ** 2;
  document.getElementById("resultadoCirculo").innerText = "Área: " + area.toFixed(2);
}

// 06 - Nome Completo
function concatenarNome() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  document.getElementById("resultadoNome").innerText = `Nome completo: ${nome} ${sobrenome}`;
}

// 07 - Idade
function calcularIdade() {
  let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
  let anoAtual = new Date().getFullYear();
  document.getElementById("resultadoIdade").innerText = "Idade: " + (anoAtual - anoNascimento);
}

// 08 - Desconto
function calcularDesconto() {
  let preco = parseFloat(document.getElementById("preco").value);
  let desconto = parseFloat(document.getElementById("desconto").value);
  let precoFinal = preco - (preco * desconto / 100);
  document.getElementById("resultadoDesconto").innerText = "Preço final: R$ " + precoFinal.toFixed(2);
}

// 09 - Conversor de Moeda
function converterMoeda() {
  let reais = parseFloat(document.getElementById("reais").value);
  let taxa = parseFloat(document.getElementById("taxaCambio").value);
  let dolares = reais / taxa;
  document.getElementById("resultadoMoeda").innerText = "US$ " + dolares.toFixed(2);
}

// 10 - Sucessor e Antecessor
function sucessorAntecessor() {
  let numero = parseInt(document.getElementById("numero").value);
  document.getElementById("resultadoSucessor").innerText = `Antecessor: ${numero-1}, Sucessor: ${numero+1}`;
}

// 11 - Dias em Horas
function diasEmHoras() {
  let dias = parseInt(document.getElementById("dias").value);
  document.getElementById("resultadoDiasHoras").innerText = `${dias} dias = ${dias*24} horas`;
}

// 12 - Salário
function calcularSalario() {
  let valorHora = parseFloat(document.getElementById("valorHora").value);
  let horasMes = parseFloat(document.getElementById("horasMes").value);
  document.getElementById("resultadoSalario").innerText = "Salário bruto: R$ " + (valorHora*horasMes).toFixed(2);
}

// 13 - Paridade
function verificarParidade() {
  let num = parseInt(document.getElementById("numParidade").value);
  document.getElementById("resultadoParidade").innerText = (num % 2 === 0) ? "Par" : "Ímpar";
}

// 14 - Gorjeta
function calcularGorjeta() {
  let conta = parseFloat(document.getElementById("conta").value);
  let total = conta + (conta*0.10);
  document.getElementById("resultadoGorjeta").innerText = "Total com gorjeta: R$ " + total.toFixed(2);
}

// 15 - Perímetro Retângulo
function calcularPerimetro() {
  let largura = parseFloat(document.getElementById("largura").value);
  let altura = parseFloat(document.getElementById("alturaRet").value);
  document.getElementById("resultadoPerimetro").innerText = "Perímetro: " + (2*(largura+altura));
}

// 16 - Conversor de Metros
function converterMetros() {
  let metros = parseFloat(document.getElementById("metros").value);
  document.getElementById("resultadoMetros").innerText = `${metros}m = ${metros*100}cm = ${metros*1000}mm`;
}

// 17 - Combustível
function calcularCombustivel() {
  let distancia = parseFloat(document.getElementById("distancia").value);
  let consumo = parseFloat(document.getElementById("consumo").value);
  document.getElementById("resultadoCombustivel").innerText = "Litros gastos: " + (distancia/consumo).toFixed(2);
}

// 18 - Reajuste Salarial
function reajusteSalarial() {
  let salario = parseFloat(document.getElementById("salarioAtual").value);
  document.getElementById("resultadoReajuste").innerText = "Novo salário: R$ " + (salario*1.15).toFixed(2);
}

// 19 - Tempo de Viagem
function tempoViagem() {
  let distancia = parseFloat(document.getElementById("distanciaViagem").value);
  let velocidade = parseFloat(document.getElementById("velocidadeMedia").value);
  document.getElementById("resultadoViagem").innerText = "Tempo: " + (distancia/velocidade).toFixed(2) + " horas";
}

// 20 - Divisor de Conta
function dividirConta() {
  let valor = parseFloat(document.getElementById("valorConta").value);
  let pessoas = parseInt(document.getElementById("pessoas").value);
  document.getElementById("resultadoConta").innerText = "Cada paga: R$ " + (valor/pessoas).toFixed(2);
}

// 21 - Idade em Dias
function idadeEmDias() {
  let anos = parseInt(document.getElementById("idadeAnos").value);
  document.getElementById("resultadoIdadeDias").innerText = `${anos} anos ≈ ${anos*365} dias`;
}

// 22 - Área Triângulo
function areaTriangulo() {
  let base = parseFloat(document.getElementById("baseTri").value);
  let altura = parseFloat(document.getElementById("alturaTri").value);
  document.getElementById("resultadoTriangulo").innerText = "Área: " + ((base*altura)/2);
}

// 23 - Potenciação
function potenciacao() {
  let base = parseFloat(document.getElementById("baseNum").value);
  let expoente = parseInt(document.getElementById("expoente").value);
  document.getElementById("resultadoPotencia").innerText = "Resultado: " + (base**expoente);
}

// 24 - Inversão de String
function inverterString() {
  let palavra = document.getElementById("palavra").value;
  if (!palavra) {
    document.getElementById("resultadoString").innerText = "Digite uma palavra!";
    return;
  }
  let invertida = palavra.split("").reverse().join("");
  document.getElementById("resultadoString").innerText =
    `Palavra: ${palavra} | Tipo: ${typeof palavra} | Tamanho: ${palavra.length} | Invertida: ${invertida}`;
}

// 25 - Preço de Venda
function precoVenda() {
  let custo = parseFloat(document.getElementById("custo").value);
  let margem = parseFloat(document.getElementById("margemLucro").value);
  if (isNaN(custo) || isNaN(margem)) {
    document.getElementById("resultadoVenda").innerText = "Preencha os campos!";
    return;
  }
  let venda = custo + (custo * margem / 100);
  document.getElementById("resultadoVenda").innerText = "Preço de venda: R$ " + venda.toFixed(2);
}
