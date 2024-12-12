const marcha_horario = document.querySelector(".flex-marcha-horario");
const marcha_antihorario = document.querySelector(".flex-marcha-antihorario");
const paro = document.querySelector(".flex-paro");
const mensaje =document.querySelector(".flex-mensaje");
let motor = false;

marcha_horario.addEventListener("click", () => {
	if(motor) return;
	motor = true;
	mensaje.innerText = "El motor gira en sentido horario..";
});

marcha_antihorario.addEventListener("click", () => {
	if(motor) return;
	motor = true;
	mensaje.innerText = "El motor gira en sentido antihorario..";

});

paro.addEventListener("click", () => {
	if(!motor) return;
	motor = false;
	mensaje.innerText = "El motor esta detenido";

})
