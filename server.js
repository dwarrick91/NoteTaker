const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /notes'));

app.get('/notes', (req, res) => {
console.log(__dirname);
  res.sendFile(path.join(__dirname, 'public/notes.html'))
} 
);
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public')));

app.get('/api/notes', (req, res) => res.json(db));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});