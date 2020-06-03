const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/todo-list');

const db = mongoose.connection;

db.on('error',console.error.bind('connection error'));

db.once('open',function(){
    console.log('sucessfully connected to DB');
});