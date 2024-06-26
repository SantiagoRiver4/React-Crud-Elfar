import React from 'react';
import "./App.css";

function App() {

  const hanleBorrar = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(`http://localhost:3003/api/eliminar/${formData.get('documentoEliminacion')}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const responseData = await response.json();
      console.log(responseData);

      alert(`El documento ${formData.get('documentoEliminacion')} ha sido eliminado exitosamente`);

      // Mostrar mensaje de éxito

    } catch (error) {
      console.error('Error al eliminar el documento:', error);

      // Mostrar mensaje de error
    }
  }

  const handleActualizar = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      Documento: formData.get('documentoActualizar'),
      Nombre1: formData.get('nuevoNombre1'),
      Nombre2: formData.get('nuevoNombre2'),
      Apellido1: formData.get('nuevoApellido1'),
      Apellido2: formData.get('nuevoApellido2'),
      Correo: formData.get('nuevoCorreo'),
      Telefono: formData.get('nuevoTelefono')
    };

    try {
      const response = await fetch('http://localhost:3004/api/actualizar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      alert(`El documento ${formData.get('documentoActualizar')} ha sido actualizado exitosamente`);

    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    }

  }

  return (
    <div className="padre">

      <div className="delte">
        <h1>Eliminar Documento</h1>
        <form onSubmit={hanleBorrar}>

          <label htmlFor="documentoEliminacion">Número de Documento a Eliminar:</label>
          <input type="text" id="documentoEliminacion" name="documentoEliminacion" />
          <button id="eliminarBtn">Eliminar</button>
          <div id="resultadoEliminacion"></div>
        </form>
      </div>

      <div className="updates">
        <h1>Actualización de Documentos</h1>
        <form id="actualizarForm" onSubmit={handleActualizar}>
          <label htmlFor="documentoActualizar">Número de Documento:</label>
          <input type="text" id="documentoActualizar" name="documentoActualizar" />
          
          <label htmlFor="nuevoNombre1">Nuevo Nombre 1:</label>
          <input type="text" id="nuevoNombre1" name="nuevoNombre1" />
          
          <label htmlFor="nuevoNombre2">Nuevo Nombre 2:</label>
          <input type="text" id="nuevoNombre2" name="nuevoNombre2" />
          
          <label htmlFor="nuevoApellido1">Nuevo Apellido 1:</label>
          <input type="text" id="nuevoApellido1" name="nuevoApellido1" />
          
          <label htmlFor="nuevoApellido2">Nuevo Apellido 2:</label>
          <input type="text" id="nuevoApellido2" name="nuevoApellido2" />
          
          <label htmlFor="nuevoCorreo">Nuevo Correo:</label>
          <input type="text" id="nuevoCorreo" name="nuevoCorreo" />
          
          <label htmlFor="nuevoTelefono">Nuevo Teléfono:</label>
          <input type="text" id="nuevoTelefono" name="nuevoTelefono" />
          
          <button type="submit" id="actualizarBtn">Actualizar</button>
        </form>
        <div id="resultadoActualizacion"></div>
      </div>

    </div>
  )
}

export default App;
