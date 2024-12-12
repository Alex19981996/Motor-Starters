const marcha = document.querySelector(".flex-marcha");
const paro = document.querySelector(".flex-paro");
const mensaje = document.querySelector(".flex-mensaje");
let motor = false;



	marcha.addEventListener("click", () =>{
	if(motor) return
		motor = true;
	mensaje.innerText = "El motor esta en conexion Estrella..";
	setTimeout(() =>{

		if(motor) {
			mensaje.innerText = "El motor esta en conexion Delta..";
		}
	}, 2000)
});



	paro.addEventListener("click", () =>{
	if(!motor) return
		motor = false;
	mensaje.innerText = "El motor esta detenido!"
});
	





