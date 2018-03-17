const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove(, (result) => {
//
// });

Todo.findByIdAndRemove('5aac0b8af25c7e26a49029c8').then((todo) => {
    console.log(todo);  
});
