import admin from 'firebase-admin';
import {faker} from '@faker-js/faker'

import serviceAccount from '../discos-depositos-firebase-adminsdk.json' assert {type: 'json'};


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const db = admin.firestore()


async function seedDatabase() {
  console.log('Seeding Firestore...');

  // Crear clientes/suppliers
  const clientes = [];
  for (let i = 0; i < 10; i++) {
    const cliente = {
      id: faker.string.uuid(),
      nombre: faker.company.name(),
      telefono: faker.phone.number(),
      email: faker.internet.email(),
      direccion: faker.address.streetAddress(),
    };
    clientes.push(cliente);
    await db.collection('clientes').doc(cliente.id).set(cliente);
  }

  // Crear productos
  const productos = [];
  for (let i = 0; i < 20; i++) {
    const cliente = faker.faker.helpers.randomize(clientes);
    const producto = {
      id: faker.string.uuid(),
      nombre: faker.commerce.productName(),
      descripcion: faker.commerce.productDescription(),
      clienteId: cliente.id,
      precio_distribucion: faker.commerce.price(10, 100, 2),
      pvp: faker.commerce.price(20, 200, 2),
    };
    productos.push(producto);
    await db.collection('productos').doc(producto.id).set(producto);
  }

  // Crear lotes
  const lotes = [];
  for (let i = 0; i < 30; i++) {
    const producto = faker.helpers.randomize(productos);
    const lote = {
      id: faker.string.uuid(),
      productoId: producto.id,
      clienteId: producto.clienteId,
      cantidad: faker.datatype.number({ min: 10, max: 500 }),
      fecha_ingreso: faker.date.past(),
      estado: 'disponible',
    };
    lotes.push(lote);
    await db.collection('lotes').doc(lote.id).set(lote);
  }

  // Crear ventas y asociarlas a lotes
  for (let i = 0; i < 10; i++) {
    const cliente = faker.helpers.randomize(clientes);
    const venta = {
      id: faker.string.uuid(),
      clienteId: cliente.id,
      fecha_venta: faker.date.recent(),
      total: 0,
    };
    const ventaRef = db.collection('ventas').doc(venta.id);
    await ventaRef.set(venta);

    // Asociar lotes a la venta
    const lotesVenta = faker.helpers.arrayElements(lotes, faker.faker.datatype.number({ min: 1, max: 3 }));
    let totalVenta = 0;

    for (const lote of lotesVenta) {
      const cantidadVendida = faker.datatype.number({ min: 1, max: lote.cantidad });
      totalVenta += cantidadVendida * faker.datatype.number({ min: 20, max: 200 });

      await db.collection('ventas_lotes').add({
        ventaId: venta.id,
        loteId: lote.id,
        cantidad: cantidadVendida,
      });
    }

    // Actualizar el total de la venta
    await ventaRef.update({ total: totalVenta });
  }

  console.log('Seeding completado.');
}

seedDatabase().catch(console.error);
