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
    nombre:faker.person.firstName,
    rol: faker.helpers.arrayElement(roles)
}

//2. Seed Productos
