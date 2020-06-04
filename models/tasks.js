
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const todoListSchema=new Schema(
    {
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true
        },
        due_date:{
            type:Date,
            required:true
        },

    }
);

const todoList=mongoose.model('todoList',todoListSchema);

module.exports=todoList;