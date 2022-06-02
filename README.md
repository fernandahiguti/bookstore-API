# API Rest with Express and MongoDB

  - Let's go!

### Alguns aspectos
  - Conceito de recurso
  - Cada recurso tem uma URI
    - /livros /autores /editoras
  - Comunicação stateless
  - Métodos HTTP para manipular recursos
    - GET, POST, PUT, DELETE
  - Formato de representação do recurso

### Livraria Alura
  - GET https://localhost:3000/livros => Buscar relação de livros
  - GET https://localhost:3000/livros/{id} => Buscar livro específico
  - POST https://localhost:3000/livros => Criar novo livro
  - GET https://localhost:3000/livros/{id} => Editar alguma informação 
  - GET https://localhost:3000/livros/{id} => Excluir um livro
