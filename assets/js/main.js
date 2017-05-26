/*
EL TABLERO CON EL INPUT DESAPARECE 
document.getElementById("tablero").style.display = "none";
*/
/******** VALIDAR NUMERO TELEFÓNICO *******/
	var numero = document.getElementById("boton_input"); 
	numero.addEventListener('click', function(){
		var input = document.getElementById('phone_number').value;
		if(input.length == 0){
			alert ("Debe ingresar un número de teléfono!");
		}else if(/[a-zA-Z]/.test(input)){
			alert("Solo puede ingresar números");
		}else if(input.length != 9){
			alert("Deben ingresar 9 dígitos");
		}
});

/********* VALIDAR COORDENADAS ********/	
	var iniciar = document.getElementById("start");
	iniciar.addEventListener('click', function(){
		var x = document.getElementById('posicion_x').value;
		var y = document.getElementById('posicion_y').value;
		if(x.length == 0 || y.length == 0){
			alert("Debe ingresar coordenadas!");
		}else if(/[a-zA-Z]/.test(x) || /[a-zA-Z]/.test(y)){
			alert("Solo puede ingresar números");
		}else if(x.length != 1 || y.length != 1){
			alert("Dene ingresar solo 1 dígito")
		}
	})