import books from "../models/Book.js";

class bookController {

  static listBooks = (req, res) => {
    books.find((error, books)=>{
      res.status(200).json(books);
    })
  }

  static registerBook = (req, res) => {
    let book = new books(req.body);

    book.save((error) => {

      if(error){
        res.status(500).send({message: `${error.message} - failed to register book.`})
      } else {
        res.status(201).send(book.toJSON())
      }
    })

  }

}

export default bookController;