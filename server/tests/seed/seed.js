const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'datAssssssssssss@ass.as',
    password: 'userOnePasssss',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString(),
    }],
}, {
    _id: userTwoId,
    email: 'noass@ass.as',
    password: 'userTwoPasssss',
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test to todo',
}, {
    _id: new ObjectID(),
    text: 'Second test to todo',
    complete: true,
    completedAt: 333,
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]).then(() => done());
    });
};

module.exports = {todos, populateTodos, users, populateUsers};
