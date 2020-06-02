const express=require('express');

const router=express.Router();
const userController=require('../controllers/users_controller');

router.get('/profile',userController.profile);


console.log('Inside user.js');


// router.post('/add',function(req,res){  // i added this post method but it is not working because by deafult it is always a get request and if we use post it will not work..
//     console.log('INSIDE POST');
//     return res.send('<h1>Post request</h1>');
// });


module.exports=router;