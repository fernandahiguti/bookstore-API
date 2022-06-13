import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js"

db.on("error", console.log.bind(console, 'connection error'))

db.once("open", ()=> {
  console.log('sucessful database connection')
})

const app = express();

app.use(express.json())

// const books = [
//  {id: 1, "title":"O Senhor dos Anéis"},
//  {id: 2, "title":"O Hobbit"}
//]

app.get('/', (req, res) => {
  res.status(200)
  .send("Curso de node");
})

app.get('/livros', (req, res) => {
  res.status(200)
  .json(books);
})

app.get('/livros/:id', (req, res) => {
  let index = searchBook(req.params.id)
  res.json(books[index])
})

app.post('/livros', (req, res) => {
  books.push(req.body);
  res.status(201)
  .send('Livro cadastrado com sucesso')
})


app.put('/livros/:id', (req, res) => {
  let index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books)
})

app.delete('/livros/:id', (req, res) => {
  let {id} = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  
  res.send(`Livro ${id} removido com sucesso`)
})

function searchBook (id){
  return books.findIndex(book => book.id == id);
}
export default app
