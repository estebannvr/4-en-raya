var turno = 1;

function colocarFicha(col,fil){
	if(turno == 1){
		turno++;
		document.getElementById("mensaje").innerHTML = "Turno de Jugador 2";
	}	else {
		turno--;
		document.getElementById("mensaje").innerHTML = "Turno de Jugador 1";
	}
}	
