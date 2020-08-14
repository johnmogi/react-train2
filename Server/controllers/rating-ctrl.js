const express = require("express");
const ratingsLogic = require("../logic/rating");
const router = express.Router();

// GET <http://localhost:3000/api/ratings>
router.get("/", async (request, response) => {
  try {
    const ratings = await ratingsLogic.getAllratingsAsync();
    response.json(ratings);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET <http://localhost:3000/api/ratings/rating/:id>
router.get("/rating/:id", async (request, response) => {
  try {
    const id = +request.params.id
    const rating = await ratingsLogic.getOneratingAsync(id);
    response.json(rating);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PATCH <http://localhost:3000/api/ratings/rating/:id>
router.patch("/rating/:id", async (request, response) => {
  const id = +request.params.id
  const info = request.body
  try {
    const updatedRating = await ratingsLogic.updateRatingAsync(id, info);
    if(updatedRating === null) {
      response.sendStatus(404);
      return;
  }  
    response.json(updatedRating);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// delete <http://localhost:3000/api/ratings/rating/:id>
router.delete("/rating/:id", async (request, response) => {
  const id = +request.params.id
  try {
     await ratingsLogic.deleteRatingAsync(id);
     response.sendStatus(204);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST <http://localhost:3000/api/ratings/>
router.post("/", async(request, response) => {
  const info = request.body;
  try {
      const rating = await ratingsLogic.AddOneRatingAsync(info);
      response.json(rating);
  } catch (err) {
      response.status(500).send(err.message);
  }
});

module.exports = router;
