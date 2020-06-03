var tasks=require('../models/tasks');
console.log(tasks);
module.exports.home=function(req,res){
    return res.render('home',{
        task: tasks
    });
};