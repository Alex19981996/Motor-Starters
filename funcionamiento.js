const marcha = document.querySelector(".flex-marcha");
const paro = document.querySelector(".flex-paro");
const mensaje = document.querySelector(".flex-mensaje");
let motor = false;

marcha.addEventListener("click", () =>{
	if(motor) return;
	motor = true;
	mensaje.textContent = "El motor esta encendido..";
})

paro.addEventListener("click", () =>{
	if(!motor) return;
	motor = false;
	mensaje.textContent = "El motor esta detenido";
})