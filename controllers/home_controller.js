var tasks=require('../models/tasks');
const db=require('../config/moongoose');
const todoList=require('../models/tasks');


module.exports.home=function(req,res){
    todoList.find(
        {},
        function(err,tasks){
            if(err){
                console.log(err);
                return;
            }
            else{
                return res.render('home',{
                    task: tasks
                });
            }
        });

    
};


