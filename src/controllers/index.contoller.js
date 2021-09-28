
const userService = require('../services/usuario');

const getUsers=async (req,res)=>{

    var nombre= req.query.nombre;
    //const response={};
    console.log( nombre);
    if ( nombre===undefined) {
     
      const   response = await userService.getUsersService();
      res.status(200).json(response.rows); 
    } else {
        const response = await userService.getUserServiceByName(nombre);
        if (response.rows.length>0) {
            res.status(200).json(response.rows);                 
        } else {
            res.status(404).json("usuario no encontrado con el nombre :"+nombre);      
        }
    }

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

     
 };

 const getUserById=async (req,res)=>{


    const id= req.params.id;
    const response = await userService.getUserServiceById(id);    
    if(response.rows.length>0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json("usuario no encontrado con el id :"+id);
    }
    
 };
 
 const getUserByName=async (req,res)=>{
     const{nombre} = req.body;
     const response = await userService.getUserServiceByName(nombre);
     if (response.rows.length>0) {
        res.status(200).json(response.rows);         
     } else {
        res.status(404).json("usuario no encontrado con nombre :"+nombre);
     }

 };

module.exports={
    getUsers,
    createUser,
    getUserById,
    getUserByName
}
