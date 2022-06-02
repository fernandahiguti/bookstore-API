import express from "express";

const app = express();

app.use(express.json())

const books = [
  {id: 1, "title":"Senhor dos Anéis"},
  {id: 2, "title":"O Hobbit"}
]

app.get('/', (req, res) => {
  res.status(200)
  .send("Curso de node");
})

app.get('/livros', (req, res) => {
  res.status(200)
  .json(books);
})

app.post('/livros', (req, res) => {
  books.push(req.body);
  res.status(201)
  .send('Livro cadastrado com sucesso')
})

export default app
