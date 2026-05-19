// ============================================================
// GABARITO – Avaliação JavaScript
// FIAP – Engenharia de Software
// ============================================================


// Q1 – descreverSoma
// Conceitos: typeof, concatenação
// Erros comuns: usar == em vez de ===, esquecer typeof em um dos dois
function descreverSoma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Valores inválidos.";
  }
  return "A soma de " + a + " e " + b + " é " + (a + b) + ".";
}


// Q2 – verificarPalavra
// Conceitos: trim, length, toLowerCase, includes
// Erros comuns: esquecer trim antes de checar length,
//               esquecer toLowerCase em um dos dois lados
function verificarPalavra(frase, palavraBusca) {
  const fraseTrimada = frase.trim();
  if (fraseTrimada.length < 5) {
    return "A frase é muito curta";
  }
  if (fraseTrimada.toLowerCase().includes(palavraBusca.toLowerCase())) {
    return "A frase contém a palavra de busca";
  }
  return "A frase não contém a palavra de busca";
}


// Q3 – calcularDesconto
// Conceitos: typeof, operadores aritméticos, toFixed
// Erros comuns: validar desconto < 0 mas esquecer > 100,
//               ordem errada da subtração
function calcularDesconto(preco, desconto) {
  if (typeof preco !== "number" || preco <= 0) {
    return "Preço inválido.";
  }
  if (typeof desconto !== "number" || desconto < 0 || desconto > 100) {
    return "Desconto inválido.";
  }
  const precoFinal = preco - (preco * desconto / 100);
  return "De R$ " + preco + " por R$ " + precoFinal.toFixed(2) + ".";
}


// Q4 – converterMoeda
// Conceitos: parâmetro padrão, if/else if, divisão, toFixed
// Erros comuns: esquecer o parâmetro padrão, multiplicar em vez de dividir,
//               não cobrir todas as moedas no if/else if
function converterMoeda(valor, de, para = "USD") {
  if (typeof valor !== "number" || valor <= 0) {
    return "Valor inválido.";
  }
  if (de !== "BRL") {
    return "Moeda de origem inválida.";
  }
  if (para !== "USD" && para !== "EUR" && para !== "GBP") {
    return "Moeda de destino inválida.";
  }
  let taxa = 0;
  if (para === "USD") {
    taxa = 5.70;
  } else if (para === "EUR") {
    taxa = 6.20;
  } else if (para === "GBP") {
    taxa = 7.10;
  }
  return "R$ " + valor + " = " + (valor / taxa).toFixed(2) + " " + para;
}


// Q5 – calcularMulta (debug)
// Os 5 erros no código original eram:
//   1. typeof valorOriginal !== "number" && ...  → deve ser ||
//   2. valorOriginal <= 0 && diasAtraso < 0      → deve ser ||
//   3. let total = valorOrginal                  → typo: valorOrginal (undefined)
//   4. let dia = 1                               → deve ser 0 (conta uma vez a menos)
//   5. while (dia > diasAtraso)                  → deve ser dia < diasAtraso
function calcularMulta(valorOriginal, diasAtraso) {
  if (typeof valorOriginal !== "number" || typeof diasAtraso !== "number") {
    return "Valor inválido.";
  }
  if (valorOriginal <= 0 || diasAtraso < 0) {
    return "Valor inválido.";
  }
  let total = valorOriginal;
  let dia = 0;
  if (diasAtraso > 0) {
    do {
      total = total + 10;
      dia++;
    } while (dia < diasAtraso);
  }
  return "Total: R$ " + total.toFixed(2);
}


// Q6 – lancarDados
// Conceitos: for, Math.random, Math.floor, acumuladores
// Erros comuns: Math.random() * 6 sem + 1 (gera 0 a 5),
//               não inicializar menor com 7, formato da string errado
function lancarDados(n) {
  if (typeof n !== "number" || isNaN(n) || n <= 0 || n !== Math.floor(n)) {
    return "Inválido.";
  }
  let soma = 0;
  let maior = 0;
  let menor = 7;
  for (let i = 0; i < n; i++) {
    const face = Math.floor(Math.random() * 6) + 1;
    soma += face;
    if (face > maior) maior = face;
    if (face < menor) menor = face;
  }
  return "Lançamentos: " + n + " | Soma: " + soma + " | Maior: " + maior + " | Menor: " + menor;
}


module.exports = {
  descreverSoma,
  verificarPalavra,
  calcularDesconto,
  converterMoeda,
  calcularMulta,
  lancarDados,
};
