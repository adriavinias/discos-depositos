import {functions} from 'firebase-functions';
import admin from 'firebase-admin';
import {faker} from '@faker-js/faker'

admin.initializeApp({
    credential: admin.credential.cert('./discos-depositos-firebase-adminsdk.json'),
})
const db = admin.firestore()

//1. Seed usuarios

const roles = ['administrador', 'editor']

const usuarioSeed = {
    nombre:faker.person.firstName("male"),
    rol: faker.helpers.arrayElement(roles)
}

//2. Seed Productos



//test - 16/01/2025

exports.seedDatabase = functions.https.onRequest(async (req, res) => {
    // Genera datos de ejemplo
    const users = [];
    for (let i = 0; i < 3; i++) {
      users.push(usuarioSeed);
    }
  
    // Escribe los datos en Firestore
    const batch = db.batch();
    users.forEach(user => {
      batch.set(db.collection('usuarios').doc(), user);
    });
    await batch.commit();
  
    res.send('Database seeded successfully');
  });