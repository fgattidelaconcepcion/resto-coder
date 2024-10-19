const paltos = [];

const agregarPlato = () => {
  const nombrePlato = prompt('Ingrese el nombre del plato').trim();

  if (nombrePlato) {
    const plato = { nombre: nombrePlato};
    platos.push(plato);
    alert('Plato agregado con éxito');
  } else {
    alert('El nombre del plato no puede estar vacío');
  }
};

const eliminarPlato = () => {
  const platoAEliminar = prompt('Ingrese el nombre del plato que desea eliminar').trim();
  const index = platos.findIndex(plato => plato.nombre === platoAEliminar);

  if (index !== -1) {
    platos.splice(index, 1);
    alert('plato eliminado con éxito');
  } else {
    alert('El plato ingresado no existe');
  }
};

const modificarPlato = () => {
  const platoAModificar = prompt('Ingrese el nombre del plato que desea modificar').trim();
  const index = platos.findIndex(plato => plato.nombre === platoAModificar);

  if (index !== -1) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre del plato').trim();
    if (nuevoNombre) {
      plato[index].nombre = nuevoNombre;
      alert('Plato modificado con éxito');
    } else {
      alert('El nuevo nombre no puede estar vacío');
    }
  } else {
    alert('El plato ingresado no existe');
  }
};

const mostrarPlatos = (platos) => {
  if (platos.length === 0) {
    alert('No hay platos en la lista.');
  } else {
    const listaPlatos = platos.map(plato => `Nombre: ${plato.nombre}`).join('\n');
    alert(`Lista de Platos:\n${listaPlatos}`);
  }
};

const app = () => {
  let continuar = true;

  while (continuar) {
    const opcion = prompt('Seleccione una opción:\n1)Agregar plato\n2)Eliminar plato\n3)Modificar plato\n4)Ver Platos\n5) Salir');
    
    switch (opcion) {
      case '1':
        agregarPlato();
        break;
      case '2':
        eliminarPlato();
        break;
      case '3':
        modificarPlato();
        break;
      case '4':
        mostrarAnimales(platos);
        break;
      case '5':
        continuar = false;
        break;
      default:
        alert('Opción no válida. Intente de nuevo.');
    }
  }
};

app(); 
