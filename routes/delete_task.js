const express=require('express');
const router=express.Router();

const deleteController=require('../controllers/delete_task_controller');


router.get('/delete',deleteController.deleteTask);
console.log('inside del router');
module.exports=router;