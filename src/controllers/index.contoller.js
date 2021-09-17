const{Pool}=require('pg');

const pool= new Pool({
    host:'localhost',
    user:'postgres',
    password:'admin',
    database:'shoprus',
    port:'5432'
})

const getUsers=async (req,res)=>{
   const response= await pool.query('select * from usuario');
   res.status(200).json(response.rows);
};

const createUser= async(req,res)=>{
    const{nombre, tipousuario,numerodocumento,direccion}=req.body;
    const response =await pool.query('insert into usuario ( nombre, idtipousuario, numerodocumento, direccion,fecharegistro) values ($1,$2,$3,$4,$5)'
    ,[nombre, tipousuario, numerodocumento, direccion,new Date()]);
    console.log("response "+response);
    res.status(201).json({
        mensasaje:'insercion fue un exito',
        body:{
                    user:{nombre, tipousuario,numerodocumento,direccion}
        }
    });

     
 };

 const getUserById=async (req,res)=>{
    const id= req.params.id;
    
    const response = await pool.query('select * from usuario where idusuario=$1',[id]);
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
