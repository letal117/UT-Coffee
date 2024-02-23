const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUsuario(nombre, direccion, telefono, correo) {
  return await prisma.usuario.create({
    data: {
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      correo: correo
    }
  });
}
// async function readUsuario(id) {
//   return await prisma.usuario.findUnique({
//     where: {
//       id: id
//     }
//   });
// }

// async function updateUsuario(id, data) {
//   return await prisma.usuario.update({
//     where: {
//       id: id
//     },
//     data: data
//   });
// }

// async function deleteUsuario(id) {
//   return await prisma.usuario.delete({
//     where: {
//       id: id
//     }
//   });
// }

async function main() {
 
    // Crear un nuevo usuario
    const usuario = await createUsuario("manuel", "Calle 12 ", "9850023488", "manuel@gmail.com");
    console.log(usuario);

  //   // Leer un usuario por su ID
  //   const usuario = await readUsuario(nuevoUsuario.id);
  //   console.log("Usuario encontrado:", usuario);

  //   // Actualizar el usuario recién creado
  //   const usuarioActualizado = await updateUsuario(nuevoUsuario.id, { telefono: "987654321" });
  //   console.log("Usuario actualizado:", usuarioActualizado);

  //   // Eliminar el usuario
  //   await deleteUsuario(nuevoUsuario.id);
  //   console.log("Usuario eliminado correctamente.");
  // } catch (error) {
  //   console.error("Error:", error);
  // } finally {
  //   await prisma.$disconnect();
 // }

};

main();