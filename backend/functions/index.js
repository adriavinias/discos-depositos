import functions from "firebase-functions";
import admin from "firebase-admin";
import {faker} from "@faker-js/faker";
admin.initializeApp();
const db = admin.firestore();

export const seedDatabase = functions.(async (req, res) => {
  try {
    const batch = db.batch();

    // Cantidad de documentos que quieres generar
    const numClientes = 100;
    const numProductosPorCliente = 10;

    for (let i = 0; i < numClientes; i++) {
      // Generar cliente
      const clienteId = `cliente_${i}`;
      const clienteData = {
        nombre: faker.person.fullName(),
        telefono: faker.phone.number(),
        email: faker.internet.email(),
        direccion: faker.location.streetAddress(),
      };

      const clienteRef = db.collection("clientes").doc(clienteId);
      batch.set(clienteRef, clienteData);

      // Generar productos para este cliente
      for (let j = 0; j < numProductosPorCliente; j++) {
        const productoId = `producto_${i}_${j}`;
        const productoData = {
          nombre: faker.commerce.productName(),
          descripcion: faker.commerce.productDescription(),
          clienteId: clienteId,
          precio_distribucion: faker.commerce.price(10, 50, 2),
          pvp: faker.commerce.price(50, 100, 2),
        };

        const productoRef = db.collection("productos").doc(productoId);
        batch.set(productoRef, productoData);
      }
    }

    // Ejecutar el batch
    await batch.commit();
    res.status(200).send("Base de datos inicializada");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    res.status(500).send("Error al inicializar la base de datos.");
  }
});
