function validarNombre(nombre) {
  const regex = /^[a-zA-Z\s]{1,50}$/;
  return regex.test(nombre);
}

function validarApellido(apellido) {
  const regex = /^[a-zA-Z\s]{1,50}$/;
  return regex.test(apellido);
}

function validarCorreo(correo) {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/;
  return regex.test(correo);
}

function validarTelefono(telefono) {
  const regex = /^\d{7,15}$/;
  return regex.test(telefono);
}

function validarFechaNacimiento(fecha) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(fecha);
}

function registrar() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (validarNombre(nombre) && validarApellido(apellido) && validarCorreo(correo) && validarTelefono(telefono) && validarFechaNacimiento(fechaNacimiento)) {
      document.getElementById("mensaje").innerHTML = "Registro exitoso";
      document.getElementById("mensaje").style.color = "blue";
      document.getElementById("registroForm").reset();
  } else {
      document.getElementById("mensaje").innerHTML = "Error en el registro, verifica los datos ingresados.";
      document.getElementById("mensaje").style.color = "red";
  }
}