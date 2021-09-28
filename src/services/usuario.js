const{Pool}=require('pg');
const config = require('../config');
const pool = new Pool(config.db);


async function getUsersService() {
    const response= await pool.query('select * from usuario');
    return response;
}
async function getUserServiceById(id=0){
    const response = await pool.query('select * from usuario where idusuario=$1',[id]);
    return response;
}

async function getUserServiceByName(name=""){
    const response = await pool.query('select * from usuario where nombre like $1',['%' + name + '%']);
    return response;
}
async function createUserService(user) {

    const{nombre, tipousuario,numerodocumento,direccion}=user;

    const response =await pool.query('insert into usuario ( nombre, idtipousuario, numerodocumento, direccion,fecharegistro) values ($1,$2,$3,$4,$5)'
    ,[nombre, tipousuario, numerodocumento, direccion,new Date()]);

    console.log("response "+response);

    return response;
}


module.exports = {
    getUsersService,
    getUserServiceById,
    getUserServiceByName,
    createUserService
  }