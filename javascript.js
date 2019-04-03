function Enviar() {

	var nome = document.getElementById("nomeid");

	if (nome.value != "") {
		alert('Obrigado sr(a) ' + nome.value + ' . Seus dados foram encaminhados com sucesso!');
	}
}


function Limpar() {

	var nome = document.getElementById("nomeid");

	if (nome.value != "") {
		alert('Obrigado sr(a) ' + nome.value + ' . Seus dados foram limpados!');
	}
}