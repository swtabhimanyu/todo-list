const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');


router.get('/',homeController.home);

router.use('/user' , require('./add_task'));


router.use('/user',require('./delete_task'));

console.log('Inside routes folder index.js');

module.exports=router;