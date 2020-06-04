
const db=require('../config/moongoose');

const express=require('express');

const todoList=require('../models/tasks');


module.exports.create=function(request,response){
    console.log(request.body); //this gives undefined
    console.log("Inside contorller for add task")
    todoList.create({
        description:request.body.description,
        category:request.body.category,
        due_date:request.body.due_date
    },function(err,newTask){
        if(err){
            console.log(`${err} in adding task`);
            return;
        }
        else{
            console.log('***********New Task Added ',newTask);
        }
    });
    return response.redirect('back');
}

