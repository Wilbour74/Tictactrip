import express from 'express';
import bodyParser from 'body-parser';

const axios = require("axios")
const app = express();
const path = require('path');
const port = 7000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'))
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

//Compter le nombre de mots pour les soustraires
const countWords = (text) => {
  const words = text.split(/\s+/)
  const filteredWords = words.filter(word => word.trim() !== '');
  return filteredWords.length;
}

app.post('/api/justify', (req,res) => {
  const { justify } = req.body;
  const wordCount = countWords(justify);
  console.log(`Nombre de mots : ${wordCount}`);
  
})