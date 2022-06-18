import express from 'express';
import authorController from "../controllers/authorsController.js"

const router = express.Router();

router
  .get('/autores', authorController.listAuthors)
  .get('/autores/:id', authorController.listAuthorById)
  .post('/autores', authorController.registerAuthor)
  .put('/autores/:id', authorController.updateAuthor)
  .delete('/autores/:id', authorController.deleteAuthor)


export default router;