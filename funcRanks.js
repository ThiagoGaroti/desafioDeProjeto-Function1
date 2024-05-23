
/*var inNome = document.getElementById("inNome").value
var inVic = parseInt(document.getElementById("inVic").value)
var inDef = parseInt(document.getElementById("inDef").value)



function calcularRank (inVic, inDef) {
      return (inVic - inDef)
}

let saldo = (calcularRank)

let tier = ""

if (saldo < 10){
      tier = "Ferro"
} else if (saldo > 10 && saldo <= 20) {
      tier = "Bronze"
} if (saldo < 10){
      tier = "Prata"
} else if (saldo > 10 && saldo <= 20) {
      tier = "Ouro"
} if (saldo < 10){
      tier = "Diamante"
} else if (saldo > 10 && saldo <= 20) {
      tier = "Lendário"
} if (saldo < 10){
      tier = "Imortal"
}

alert("O herói " + nome + " está no tier " + tier);
*/

function calcularTier(vitorias, derrotas) {
      // Calcula o saldo de vitórias
      let saldo = vitorias - derrotas;
      let tier;

      // Determina o tier com base no saldo de vitórias
      if (saldo < 10) {
            tier = "Ferro"
      } else if (saldo > 10 && saldo <= 20) {
            tier = "Bronze"
      } if (saldo > 20 && saldo <= 50) {
            tier = "Prata"
      } else if (saldo > 50 && saldo <= 80) {
            tier = "Ouro"
      } if (saldo > 80 && saldo <= 90) {
            tier = "Diamante"
      } else if (saldo > 90 && saldo <= 100) {
            tier = "Lendário"
      } if (saldo > 100) {
            tier = "Imortal"
      }
      return tier;
}

function btConfirmar() {
      // Obtém os valores dos campos de entrada
      let nome = document.getElementById("inNome").value;
      let vitorias = parseInt(document.getElementById("inVic").value)
      let derrotas = parseInt(document.getElementById("inDef").value)

      // Verifica se os valores são válidos
      if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
            alert("Por favor, insira valores válidos para vitórias e derrotas.")
            return;
      }

      let saldoFinal = vitorias - derrotas

      // Chama a função calcularTier para obter o tier
      let tier = calcularTier(vitorias, derrotas);

      // Exibe o resultado
      var output = document.getElementById("outRes")
      output.innerHTML = ("O herói " + nome + " com a pontuação " + saldoFinal + " está no tier " + tier)

}


//+ " com a pontuação " + saldo 