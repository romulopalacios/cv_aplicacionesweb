function guardarCliente() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const pais = document.getElementById('pais').value;

  // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o almacenarlos localmente.

  // Por ejemplo, mostraremos los datos en la consola.
  console.log('Datos del cliente:');
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Email:', email);
  console.log('Teléfono:', telefono);
  console.log('Dirección:', direccion);
  console.log('País:', pais);

  // Limpia los campos después de guardar
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('pais').value = '';

  // Evita que se recargue la página después de enviar el formulario
  event.preventDefault();
}

  