function relogioDigital(){
	const hoje = new Date(); // Pegando a data e hora do dispositivo.
	let horas = hoje.getHours(); // Pegando somente a hora do dispositivo.
	let minutos = hoje.getMinutes(); // Pegando somente os minutos do dispositivo.
	let segundos = hoje.getSeconds(); // Pegando somente os segundos do dispositivo.
	
	minutos = checarTempo(minutos); 
	segundos = checarTempo(segundos);
	
	document.getElementById('txt').innerHTML = horas + ":" + minutos + ":" + segundos;
	setTimeout(relogioDigital, 1000); // Essa linha repete a função depois de 1 segundo, atualizando o relogio.
}


// Essa função serve pra colocar um zero quando o número for menor que dez.
function checarTempo(i){
	if (i < 10) {i = "0" + i};
	return i;
}