const express = require("express");
const booksLogic = require("../logic/book");
const router = express.Router();

// GET <http://localhost:3000/api/books>
router.get("/", async (request, response) => {
  try {
    const books = await booksLogic.getAllbooksAsync();
    response.json(books);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET <http://localhost:3000/api/books/book/:id>
router.get("/book/:id", async (request, response) => {
  try {
    const id = +request.params.id
    const book = await booksLogic.getOnebookAsync(id);
    response.json(book);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET <http://localhost:3000/api/books/category/:cat>
router.get("/category/:cat", async (request, response) => {
  try {
    const cat = request.params.cat
    const books = await booksLogic.getAllbooksFromCatAsync(cat);
    response.json(books);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// PATCH <http://localhost:3000/api/books/book/:id>
router.patch("/book/:id", async (request, response) => {
  const id = +request.params.id
  const info = request.body
  try {
    const updatedBook = await booksLogic.updateBookAsync(id, info);
    if(updatedBook === null) {
      response.sendStatus(404);
      return;
  }  
    response.json(updatedBook);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// delete <http://localhost:3000/api/books/book/:id>
router.delete("/book/:id", async (request, response) => {
  const id = +request.params.id
  try {
     await booksLogic.deleteBookAsync(id);
     response.sendStatus(204);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST <http://localhost:3000/api/books/>
router.post("/", async(request, response) => {
  const info = request.body;
  try {
      const book = await booksLogic.AddOneBookAsync(info);
      response.json(book);
  } catch (err) {
      response.status(500).send(err.message);
  }
});

module.exports = router;
