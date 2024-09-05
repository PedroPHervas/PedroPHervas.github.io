const min = 0;
const max = 9999999;

function generarNumerosYActualizarMensajes() {
  let numeroComprobar = Math.floor(Math.random() * (max - min + 1) + min);
  let numeroComprobar2 = Math.floor(Math.random() * (max - min + 1) + min);
  let numeroComprobar3 = Math.floor(Math.random() * (max - min + 1) + min);

  return { numeroComprobar, numeroComprobar2, numeroComprobar3 };
}

function mostrarMensaje01() {
  const { numeroComprobar, numeroComprobar2, numeroComprobar3 } =
    generarNumerosYActualizarMensajes();
  let mensaje = "";

  if (numeroComprobar % 2 === 0) {
    mensaje = `¿Quieres dos? date dos.`;
  } else if (numeroComprobar2 >= numeroComprobar3) {
    mensaje = `Solo una, mas suerte la proxima vez.`;
  } else {
    mensaje = `Eres lo champion!!!!, te has ganado tres.`;
  }

  document.getElementById("mensaje01").innerText = mensaje;
}

function mostrarMensaje02() {
  const { numeroComprobar, numeroComprobar2, numeroComprobar3 } =
    generarNumerosYActualizarMensajes();
  let mensaje = "";

  if (numeroComprobar >= numeroComprobar2) {
    mensaje = `Duermete jonki, duermete ya.`;
  } else if (numeroComprobar2 >= numeroComprobar3) {
    mensaje = `Hora de retirarte... para visitar a tu veterinario. 🐴`;
  } else {
    mensaje = `Eat, sleep, rave, repeat.`;
  }

  document.getElementById("mensaje02").innerText = mensaje;
}

function mostrarMensaje03() {
  const { numeroComprobar, numeroComprobar2, numeroComprobar3 } =
    generarNumerosYActualizarMensajes();
  let mensaje = "";

  if (numeroComprobar >= numeroComprobar2) {
    mensaje = `Cafe y tostadas, no seas cafre espera hasta medio día.`;
  } else if (numeroComprobar2 >= numeroComprobar3) {
    mensaje = `¡¡Buenos días, buenas rallas te metias!!`;
  } else {
    mensaje = `Las setas y el M sientan mejor en ayunas, dale duro cosechadora.`;
  }

  document.getElementById("mensaje03").innerText = mensaje;
}

document.getElementById("Boton01").addEventListener("click", mostrarMensaje01);
document.getElementById("Boton02").addEventListener("click", mostrarMensaje02);
document.getElementById("Boton03").addEventListener("click", mostrarMensaje03);
