const express=require('express');

const router=express.Router();

const addController=  require('../controllers/add_task_controller');

router.post('/add',addController.create);

module.exports=router;
