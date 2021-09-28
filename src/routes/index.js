const{Router}=require('express');
const router = Router();
const {getUsers,createUser,getUserById}=require('../controllers/index.contoller');
const {getListDiscounts,getDiscountByType,createDiscount}=require('../controllers/descuento.controller');
router.get('/users',getUsers);
router.post('/users',createUser);
router.get('/users/:id',getUserById);

//discount
router.get('/discounts',getListDiscounts);
router.post('/discounts',createDiscount);
router.get('/discounts/:id',getDiscountByType);

module.exports=router;