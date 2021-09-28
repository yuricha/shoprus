const{Pool}=require('pg');
const config = require('../config');
const pool = new Pool(config.db);

const userService = require('../services/usuario');

const getUsers=async (req,res)=>{
        const response = await userService.getUsersService();
        res.status(200).json(response.rows);

        /*
   const response= await pool.query('select * from usuario');
   res.status(200).json(response.rows);/** */
};

const createUser= async(req,res)=>{
    const{nombre, tipousuario,numerodocumento,direccion}=req.body;
    try {
        const response = await userService.createUserService(req.body);
        res.status(201).json({
            mensasaje:'insercion fue un exito',
            body:{
                        user:{nombre, tipousuario,numerodocumento,direccion}
            }
        });
        
    } catch (error) {
        console.error(`Error crear useer `, error.message);
        res.status(error.statusCode || 500).json({'message': error.message});
    }
    
   /* const{nombre, tipousuario,numerodocumento,direccion}=req.body;

    const response =await pool.query('insert into usuario ( nombre, idtipousuario, numerodocumento, direccion,fecharegistro) values ($1,$2,$3,$4,$5)'
    ,[nombre, tipousuario, numerodocumento, direccion,new Date()]);

    console.log("response "+response);
    /** */
     
 };

 const getUserById=async (req,res)=>{


    const id= req.params.id;
    const response = await userService.getUserServiceById(id);    
   // const response = await pool.query('select * from usuario where idusuario=$1',[id]);
    if(response.rows.length>0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json("usuario no encontrado");
    }
    
 };
 

module.exports={
    getUsers,
    createUser,
    getUserById
}
