
const descuentoService = require('../services/descuento');

const getListDiscounts=async (req,res)=>{

    const   response = await descuentoService.getDiscountService();
    res.status(200).json(response.rows); 
};
const getDiscountByType=async (req,res)=>{
    const id= req.params.id;
    const   response = await descuentoService.getDiscountServiceByType(id);

    if(response.rows.length>0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json("descuento no encontrado del tipo :"+id);
    }

};
    
const createDiscount=async (req,res)=>{
    const{tipousuario,descripcion,porcentaje,cantidad}=req.body;

    try {
        const   response = await descuentoService.createDiscount(req.body);
        //res.status(200).json(response.rows); 
        res.status(201).json({
            mensasaje:'insercion fue un exito',
            body:{
                        discount:{tipousuario,descripcion,porcentaje,cantidad}
            }
        });
        
    } catch (error) {
        console.error(`Error crear descuento `, error.message);
        res.status(error.statusCode || 500).json({'message': error.message});
    }

    };

module.exports={
    getListDiscounts,
    getDiscountByType,
    createDiscount
}
