import books from "../models/Book.js";

class bookController {

  static listBooks = (req, res) => {
    books.find((error, books)=>{
      res.status(200).json(books);
    })
  }

  static listBookById = (req, res) => {
    const id = req.params.id;
    books.findById(id,(error, books) => {
      if (error) {
        res.status(404).send({message: `${error.message} - book ID not found.` })
      } else {
        res.status(200).send({books})
      }
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

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, {$set: req.body}, (error)=>{
      if(!error){
        res.status(200).send({message: 'Sucessful book update.'})
      } else {
        res.status(500).send({message: error.message})
      }
    })
  }

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (error) =>{
      if(!error){
        res.status(200).send({message:'Book was deleted successfully'})
      } else {
        res.status(500).send({message:`${error.message} - unable to delete requested book/id` })
      }
    })
  }

}

export default bookController;