const db=require('../config/moongoose');

const express=require('express');

const todoList=require('../models/tasks');
console.log('inside del cont');

module.exports.deleteTask=function(request,response){
    console.log(request.query);
    var id = request.query;
    console.log(Object.keys(id));     // fetches all checkboxes which are checked..
    var count = Object.keys(id).length;
    console.log(count);
    for(let i=0;i<count;i++)
    {
        console.log(Object.keys(id)[i]);
        // deleting the task from the database by using their individual ids
        todoList.findByIdAndDelete(Object.keys(id)[i],function(err)
        {
            if(err)
            {
                console.log("error in deleting the task",err);
            }
        })
    }
     return response.redirect('back');


};