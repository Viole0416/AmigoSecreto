let amigos = [];

function agregarAmigo() {
  // Obtener el valor del input
  let campoNombre = document.getElementById("nombreAmigo");
  let nombreIngresado = campoNombre.value.trim(); // Elimina espacios en blanco

  if (nombreIngresado === "") {
    alert("Por favor inserte un nombre");
    return;
  }
  if (amigos.includes(nombreIngresado)) {
    alert("Este nombre ya está en la lista");
    return;
  }

  amigos.push(nombreIngresado);
  campoNombre.value = "";
  actualizarLista();
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en la lista de resultados
  resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSorteado}</strong> </li>`;
}

