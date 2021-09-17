const request = require('supertest');
const app = require('../index');
//import contoller from './index.contoller'

describe('testing for users', () => {
     test('debe retornar  status 200 list users', async() => {
         const response = await request(app).get('/users');
         expect(response.statusCode).toEqual(200);         
     });
     test('debe retornar status 200 para un usuario encontrado', async() => {
        const response = await request(app).get('/users/2');
        expect(response.statusCode).toEqual(200); 
     });
     
     
     test('debe retornar status 404 para un usuario no encontrado', async() => {
     const response = await request(app).get('/users/200');
        expect(response.statusCode).toEqual(404); 
     });


     
     /*cambiar data statica desde la segunda vez 
     */
     test('debe insertar nuevo usuario', async() => {
        const data ={nombre:"usuariotest3", tipousuario:3,numerodocumento:"20041450",direccion:"avnudrgt"}
        const response = await request(app).post('/users').send(data);
        expect(response.statusCode).toEqual(201);         
     })
     
})
