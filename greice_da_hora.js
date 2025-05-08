// ===============================================
// 🚀 Desafio Node.js – Greice da Hora
// ===============================================
//
// Este arquivo contém 10 funções de lógica desenvolvidas
// com Node.js. Cada função está separada por seção numerada.
// Todas as funções são chamadas com console.log ou execução direta.
//
// ===============================================


// ====================================================
// 1️⃣ Imprimindo Números Pares
// ====================================================

/**
 * Imprime todos os números pares de 0 até N (inclusive).
 *
 * @param {number} N – limite superior (inteiro >= 0).
 * @throws {TypeError} se N não for número ou não inteiro.
 * @throws {RangeError} se N for negativo.
 */
function imprimePares(N) {
  // Validação de tipo
  if (typeof N !== 'number' || !Number.isInteger(N)) {
    throw new TypeError('O parâmetro N deve ser um número inteiro.');
  }
  // Validação de valor
  if (N < 0) {
    throw new RangeError('O parâmetro N deve ser maior ou igual a zero.');
  }

  // Começamos em zero (primeiro par) e incrementamos de 2 em 2
  for (let i = 0; i <= N; i += 2) {
    console.log(i);
  }
}

// Exemplo de uso:
imprimePares(10);
// Saída esperada:
// 0
// 2
// 4
// 6
// 8
// 10
