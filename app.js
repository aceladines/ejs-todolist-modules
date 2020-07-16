const express = require('express');
const bodyParser = require('body-parser');
const datte = require(__dirname + '/date.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

let Todolist = [];
let Worklist = [];

app.get('/', (req, res) => {
  const date = datte.getDate();
  res.render('index', { date: date, list: Todolist });
});

app.post('/', (req, res) => {
  let todoList = req.body.newTodo;
  let submit = req.body.list;

  if (submit === 'Work') {
    Worklist.push(todoList);
    res.redirect('/work');
  } else {
    Todolist.push(todoList);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('index', { date: "Work List", list: Worklist });
});

app.listen(port, () => {
  console.log(`listening on port ${port} at http://localhost:${port}`);
});
