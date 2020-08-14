const express = require("express");
const cors = require("cors");
const booksController = require("./controllers/book-ctrl");
const ratingsController = require("./controllers/rating-ctrl");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/books", booksController);
server.use("/api/ratings", ratingsController);



server.listen(3000, () => console.log("Listening on <http://localhost:3000>"));
