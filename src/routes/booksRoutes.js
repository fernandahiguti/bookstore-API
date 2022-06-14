import express from 'express';
import bookController from "../controllers/booksController.js"

const router = express.Router();

router
  .get('/livros', bookController.listBooks)


export default router;

