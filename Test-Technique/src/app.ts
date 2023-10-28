import express from 'express';

const app = express();
const port = 8000;
app.get('/', (req, res) => {
  res.send('Salut tout le monde');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});