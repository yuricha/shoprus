const request = require('supertest');
const app = require('../index');
describe('testing for descuento', () => {
     test('debe retornar  status 200 lista descuentos', async() => {
         const response = await request(app).get('/discounts');
         expect(response.statusCode).toEqual(200);         
     });
     test('debe retornar status 200 para un descuentos encontrado', async() => {
        const response = await request(app).get('/discounts/2');
        expect(response.statusCode).toEqual(200); 
     });
     
     
     test('debe retornar status 404 para un descuentos no encontrado', async() => {
     const response = await request(app).get('/discounts/000');
        expect(response.statusCode).toEqual(404); 
     });

 
    
     test('debe insertar nuevo descuento', async() => {
        var percent= getRandomArbitrary(50);
        var tiperandom= getRandomArbitrary( 3);
        const data ={ tipousuario:tiperandom,descripcion:"dscto "+percent+" %",porcentaje:percent,cantidad:0}
        const response = await request(app).post('/discounts').send(data);
        expect(response.statusCode).toEqual(201);         
     })
     /** */
    
     function getRandomArbitrary( max) {
        return  Math.floor(Math.random() * max) + 1;
      }
})