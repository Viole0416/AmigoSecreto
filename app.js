let amigos = [];

function agregarAmigo() {
  // Obtener el valor del input
  let campoNombre = document.getElementById("nombreAmigo");
  let nombreIngresado = input.value.trim(); // El .trim elimina los espacios en blanco que por error esten escritos en el cuadro de texto

  if (nombreIngresado === "") {
    alert("Por favor inserte un nombre");
    return;
  }
  if (amigos.includes(nombreIngresado)) {
    alert("Este nombre ya esta en la lista");
    return;
  }
  amigos.push(nombreIngresado);
  input.value = "";
}

console.log(amigos);
