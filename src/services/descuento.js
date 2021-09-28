const{Pool}=require('pg');
const config = require('../config');
const pool = new Pool(config.db);


async function getDiscountService() {
    const response= await pool.query('select * from descuento');
    return response;
}
async function getDiscountServiceByType(type=0){
    const response = await pool.query('select * from descuento where iddescuento=$1',[type]);
    return response;
}
async function createDiscount(discount) {

    const{tipousuario,descripcion,porcentaje,cantidad}=discount;

    const response =await pool.query('insert into descuento (  idtipousuario, descripcion, porcentaje,cantidad) values ($1,$2,$3,$4)'
    ,[tipousuario,descripcion,porcentaje,cantidad]);

    console.log("response "+response);

    return response;
}


module.exports = {
    getDiscountService,
    getDiscountServiceByType,
    createDiscount
  }