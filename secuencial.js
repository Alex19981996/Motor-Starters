const marcha = document.querySelector(".marcha");
const paro = document.querySelector(".flex-paro");
const mensaje = document.querySelector(".flex-mensaje");
let contactor1 = false;
let contactor2 = false;
let contactor3 = false;
let sistemaActivo = false;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

marcha.addEventListener("click", async () => {
    if (contactor1 && sistemaActivo) return;
    contactor1 = true;
    sistemaActivo = true;
    mensaje.innerHTML = "El contactor1 esta encendido..";

    await delay(2000);
    if (!contactor1 || !sistemaActivo) return apagarSistema();
    contactor2 = true;
    mensaje.innerHTML = "El contactor2 esta encendido..";

    await delay(2000);
    if (!contactor2 || !sistemaActivo) return apagarSistema();
    contactor3 = true;
    mensaje.innerHTML = "El contactor3 esta encendido..";

    await delay(2000);
    if(!contactor3 || !sistemaActivo) return apagarSistema();
    contactor3 = false;
    mensaje.innerHTML = "El contactor3 esta apagado!";

    await delay(2000);
    if(!contactor2 || !sistemaActivo) return apagarSistema();
    contactor2 = false;
    mensaje.innerHTML = "El contactor2 esta apagado!";

    await delay(2000);
    if (!contactor1 || !sistemaActivo) return apagarSistema();
    contactor1 = false;
    mensaje.innerHTML = "El contactor1 esta apagado!";

});

paro.addEventListener("click", () => {
    if (sistemaActivo) return apagarSistema();
    sistemaActivo = false;
    mensaje.innerHTML = "El sistema esta apagado!";
});

function apagarSistema(){
    contactor1 = false;
    contactor2 = false;
    contactor3 = false;
    mensaje.innerHTML = "El sistema esta apagado!"
}
