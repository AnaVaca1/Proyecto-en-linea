	function comprobar (){
		var nombre = document.forms["formulario"]["nombre"].value;
		var email = document.forms["formulario"]["email"].value;
		if (nombre == "" || email == ""){
			alert("Uno o mas campos estan vacios");
			return false;
		}
	}
