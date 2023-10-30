import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken'; 

const axios = require("axios")
const cors = require('cors');
const app = express();
const path = require('path');
const port = 7000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.text()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'))
});
app.listen(port, (res) => {
  console.log(`server is listening on ${port}`);
});

//Compter le nombre de mots pour les soustraires
const countWords = (text) => {
  if (text) {
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => word.trim() !== '');
    return filteredWords.length;
  }
  return 0;
}

//Fonction pour justifier le texte
const justifyText = (text) => {
  const maxLength = 80;
  const words = text.split(/\s+/);
  const lines = [];

  let currentLine = '';

  for (const word of words) {
    if (currentLine.length + word.length + 1 <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  lines.push(currentLine);

  const justifiedLines = lines.map((line) => {
    if (line.length < maxLength) {
      const spacesToAdd = ' '.repeat(maxLength - line.length);
      return line + spacesToAdd;
    }
    return line;
  });

  return justifiedLines.join('\n');
}

//Envoie du texte au serveur
app.post('/api/justify', (req,res) => {
  const textTojustify = req.body;
  const wordCount = countWords(textTojustify);
  console.log(`Voici le texte rentré : ${textTojustify}`);
  console.log(`Nombre de mots : ${wordCount}`);
  res.send(`Nombre de mots:  ${wordCount}`)
})


//Recupérer un token
app.post('/api/token' , (req, res) => {
   const { email } = req.body;
   const generate = Math.random().toString(36).substring(2) + Date.now().toString(36)
   const token = jwt.sign({email}, generate);
   res.json({ token });
   console.log(token);
})