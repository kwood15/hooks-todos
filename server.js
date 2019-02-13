const express = require('express');
const todos = require('./api/todos');

const app = express();
const port = process.env.PORT || 3001;

app
  .route('/api/todos')
  .get((req, res) => res.send(todos))
  .post((req, res) => res.send('Added'))
  .put((req, res) => res.send('Completed'))
  .delete((req, res) => res.send('Deleted'));

app.listen(port, () => console.log(`Listening on port ${port}`));
