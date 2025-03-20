var turno = 1;

function colocarFicha(col,fil){
	if(turno == 1){
		turno++;
		document.getElementById("col,fil").src = "amarillo.jpg";
		document.getElementById("mensaje").innerHTML = "Turno de Jugador 2";
	}	else {
		turno--;
		document.getElementById("col,fil").src = "rojo.jpg";
		document.getElementById("mensaje").innerHTML = "Turno de Jugador 1";
	}
}	

