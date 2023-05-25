const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [];

app.get('/', (req, res) => {
  res.render('index', { todos: todos });
});

app.post('/add', (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const todoIndex = req.body.todoIndex;
  todos.splice(todoIndex, 1);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Todo app server started on port 3000');
});
