const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about',(req, res) => {
    res.send('About')
});

app.use(express.static('public'));
app.use(express.static('files'));

app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });
