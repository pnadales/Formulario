const registros = [];

function saveForm() {
  const rut = document.getElementById("rut").value;
  const nombres = document.getElementById("name").value;
  const apellidos = document.getElementById("last-name").value;
  const direccion = document.getElementById("address").value;
  const ciudad = document.getElementById("city").value;
  const telefono = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const fecha_nacimiento = document.getElementById("birthdate").value;
  const estado_civil = document.getElementById("marital_status").value;
  const comentarios = document.getElementById("comment").value;

  const registroExistente = registros.find((reg) => reg.rut === rut);

  if (registroExistente) {
    if (confirm("El registro ya existe. ¿Desea sobrescribirlo?")) {
      Object.assign(registroExistente, {
        nombres,
        apellidos,
        direccion,
        ciudad,
        telefono,
        email,
        fecha_nacimiento,
        estado_civil,
        comentarios,
      });
      alert("Registro actualizado exitosamente.");
    }
  } else {
    registros.push({
      rut,
      nombres,
      apellidos,
      direccion,
      ciudad,
      telefono,
      email,
      fecha_nacimiento,
      estado_civil,
      comentarios,
    });
    alert("Registro guardado exitosamente.");
  }
}

function deleteRecord() {
  const rut = document.getElementById("rut").value;
  const index = registros.findIndex((reg) => reg.rut === rut);

  if (index !== -1) {
    registros.splice(index, 1);
    alert("Registro eliminado exitosamente.");
    document.getElementById("medicalForm").reset();
  } else {
    alert("Registro no encontrado.");
  }
}

function searchByLastName() {
  const apellido = document.getElementById("search_apellido").value;
  const registro = registros.find(
    (reg) => reg.apellidos.toLowerCase() === apellido.toLowerCase()
  );

  if (registro) {
    alert(
      `Registro encontrado:\n\nRUT: ${registro.rut}\nNombres: ${registro.nombres}\nApellidos: ${registro.apellidos}`
    );
  } else {
    alert("No se encontró ningún registro con ese apellido.");
  }
}
