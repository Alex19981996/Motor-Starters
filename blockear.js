const marcha1 = document.querySelector(".marcha1");
const marcha2 = document.querySelector(".marcha2");
const paro = document.querySelector(".flex-paro");
const mensaje = document.querySelector(".flex-mensaje");
let contactor1 = false;
let contactor2 = false;

marcha1.addEventListener("click", () => {
    if (contactor2) {
        mensaje.innerText = "Detenga el sistema antes de encender el contactor 1.";
        return;
    }
    if (contactor1) {
        mensaje.innerText = "El contactor 1 ya está encendido.";
        return;
    }
    contactor1 = true;
    mensaje.innerText = "El contactor 1 está encendido.";
});

marcha2.addEventListener("click", () => {
    if (contactor1) {
        mensaje.innerText = "Detenga el sistema antes de encender el contactor 2.";
        return;
    }
    if (contactor2) {
        mensaje.innerText = "El contactor 2 ya está encendido.";
        return;
    }
    contactor2 = true;
    mensaje.innerText = "El contactor 2 está encendido.";
});

paro.addEventListener("click", () => {
    if (!contactor1 && !contactor2) {
        mensaje.innerText = "El sistema ya está detenido.";
        return;
    }
    contactor1 = false;
    contactor2 = false;
    mensaje.innerText = "El sistema está detenido.";
});
