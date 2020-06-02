const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

// router.get('/',function(req,res){
//     return res.end('<h1>Server up frands</h1>');
// });

router.get('/',homeController.home);

router.use('/user',require('./user'));

console.log('Inside routes folder index.js');

module.exports=router;