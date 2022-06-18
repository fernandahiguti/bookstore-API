import express from 'express';
import bookController from "../controllers/booksController.js"

const router = express.Router();

router
  .get('/livros', bookController.listBooks)
  .get('/livros/:id', bookController.listBookById)
  .post('/livros', bookController.registerBook)
  .put('/livros/:id', bookController.updateBook)
  .delete('/livros/:id', bookController.deleteBook)


export default router;

