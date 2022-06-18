import authors from "../models/Author.js";

class authorController {

  static listAuthors = (req, res) => {
    authors.find((error, authors)=>{
      res.status(200).json(authors);
    })
  }

  static listAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id,(error, authors) => {
      if (error) {
        res.status(404).send({message: `${error.message} - author ID not found.` })
      } else {
        res.status(200).send({authors})
      }
    })
  }

  static registerAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((error) => {
      if(error){
        res.status(500).send({message: `${error.message} - failed to register author.`})
      } else {
        res.status(201).send(author.toJSON())
      }
    })
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, {$set: req.body}, (error)=>{
      if(!error){
        res.status(200).send({message: 'Sucessful author update.'})
      } else {
        res.status(500).send({message: error.message})
      }
    })
  }

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (error) =>{
      if(!error){
        res.status(200).send({message:'author was deleted successfully'})
      } else {
        res.status(500).send({message:`${error.message} - unable to delete requested author/id` })
      }
    })
  }

}

export default authorController;