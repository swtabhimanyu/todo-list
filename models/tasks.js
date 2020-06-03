// var task = [
//     {
//         'description':'First task',
//         'category':'Personal',
//         'due_date':'04-06-2020'
//     } ,
//     {
//         'description':'Second task',
//         'category':'School',
//         'due_date':'06-06-2020'
//     } ,
//     {
//         'description':'Third task',
//         'category':'Work',
//         'due_date':'10-06-2020'
//     } ,
//     {
//         'description':'Fourth task',
//         'category':'Cleaning',
//         'due_date':'07-06-2020'
//     }
// ];

// module.exports=task;

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
        }

    }
);

const todoList=mongoose.model('todoList',todoListSchema);

module.exports=todoList;