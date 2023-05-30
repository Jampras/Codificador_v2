function alternarCodificacao() {
  var textoEntrada = document.getElementById('textoEntrada').value;
  var textoSaida = document.getElementById('textoSaida');
  var alternarBotao = document.getElementById('alternarBotao');

  if (alternarBotao.innerHTML === "Codificar") {
    textoSaida.value = btoa(textoEntrada);
    alternarBotao.innerHTML = "Decodificar";
  } else {
    textoSaida.value = atob(textoEntrada);
    alternarBotao.innerHTML = "Codificar";
  }
}

function copiarTextoSaida() {
  var textoSaida = document.getElementById('textoSaida');
  textoSaida.select();
  document.execCommand('copy');
  alert("Texto copiado para a área de transferência!");
}
