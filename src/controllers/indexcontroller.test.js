const request = require('supertest');
const app = require('../index');

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
     const response = await request(app).get('/users/000');
        expect(response.statusCode).toEqual(404); 
     });

     test('debe retornar status 200 para un usuario buscado por nombre y encontrado', async() => {
      const response = await request(app).get('/users')
      .query({ nombre: 'Brenda Aguirre' });
         expect(response.statusCode).toEqual(200); 
      });
     
      
     test('debe retornar status 404 para un usuario buscado por nombre y no encontrado', async() => {
      const response = await request(app).get('/users')
      .query({ nombre: 'abcd not found' });
         expect(response.statusCode).toEqual(404); 
      });
     /*cambiar data statica desde la segunda vez 
     */
    
     test('debe insertar nuevo usuario', async() => {
        var randomtest=getRandomArbitrary(100);
        var typeuseer=getRandomArbitrary(3);
        var numberdoc=getRandomArbitrary(9);
        const data ={nombre:"usertest"+randomtest, tipousuario:typeuseer,numerodocumento:"2004111"+numberdoc,direccion:"aghdmdrgt "+randomtest}
        const response = await request(app).post('/users').send(data);
        expect(response.statusCode).toEqual(201);         
     })
     /** */
     

     function getRandomArbitrary( max) {
      return  Math.floor(Math.random() * max) + 1;
    }
})
