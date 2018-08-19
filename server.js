const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send([{ express: 'Hello From Express' ,name:'Anushka mittal',feild:'Web'},
  { express: 'Hello From Express' ,name:'Yash mittal',feild:'App'},
  { express: 'Hello From Express' ,name:'Anushka mittal',feild:'Web'},
  { express: 'Hello From Express' ,name:'Anushka mittal',feild:'Web'}]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
