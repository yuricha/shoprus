const{Router}=require('express');
const router = Router();
const {getUsers,createUser,getUserById}=require('../controllers/index.contoller');
router.get('/users',getUsers);
router.post('/users',createUser);
router.get('/users/:id',getUserById);

module.exports=router;