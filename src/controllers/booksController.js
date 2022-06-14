import books from "../models/Book.js";

class bookController {

  static listBooks = (req, res) => {
    books.find((error, books)=>{
      res.status(200)
      .json(books);
    })
  }
}

export default bookController;