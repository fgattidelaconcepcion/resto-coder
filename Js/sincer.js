const platos = [];

const agregarPlato = () => {
  const nombrePlato = prompt('Ingrese el nombre del plato').trim();  //El método trim() elimina los espacios en blanco al principio y al final de una cadena de texto.

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
  const index = platos.findIndex(plato => plato.nombre === platoAEliminar); //findIndex() es un método que devuelve el índice del primer elemento del array que cumple con una condición especificada en una función.

  if (index !== -1) {//Si el indice encontrado es diferente a -1 significa que el elemento existe en el array.
    platos.splice(index, 1); //splice() es un método que cambia el contenido de un array eliminando o reemplazando elementos existentes. index es la posición del plato que se quiere eliminar y 1 indica que se debe eliminar un solo elemento.
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
      platos[index].nombre = nuevoNombre;
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
    const listaPlatos = platos.map(plato => `Nombre: ${plato.nombre}`).join('\n'); //map()crea un nuevo array de strings que contiene los nombres de todos los platos, cada uno precedido por la palabra "Nombre: ".
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
        mostrarPlatos(platos);
        break;
      case '5':
        continuar = false;
        break;
      default:
        alert('Opción no válida. Intente de nuevo.');
    }
  }
};

app(); //Controla el bucle para que el usuario pueda seleccionar las opciones.
