const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos
} = require('./APIs/todos')

app.get('/todos', getAllTodos);
exports.api = functions.https.onRequest(app);


const {
    postOneTodo
} = require('./APIs/todos')

app.post('/todo', postOneTodo);