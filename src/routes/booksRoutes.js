import express from 'express';
import bookController from "../controllers/booksController.js"

const router = express.Router();

router
  .get('/livros', bookController.listBooks)
  .post('/livros', bookController.registerBook)
  .put('/livros/:id', bookController.updateBook)


export default router;
