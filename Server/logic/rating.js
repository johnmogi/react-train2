const dal = require("../data/dal");
async function getAllratingsAsync() {
  const sql = "SELECT * FROM userRating";
  const ratings = await dal.executeAsync(sql);
  return ratings;
}
async function getOneratingAsync(id) {
  const sql = `SELECT * FROM userRating WHERE bookID = ${id}`;
  const rating = await dal.executeAsync(sql);
  return rating;
}
async function AddOneRatingAsync(info ) {
  const sql = `INSERT INTO userRating (reviewID, userName, review, reviewDate, bookID) 
  VALUES (${info.reviewID}, '${info.userName}', 
  '${info.review}','${info.reviewDate}', ${info.bookID})`;
  const ratings = await dal.executeAsync(sql);
  return ratings;
}


// async function updateRatingAsync(id, info) {
//   console.log(id,info)
//   // const sql = `UPDATE userRating SET ratingName= '${info.ratingName}',price='${info.price}',rating='${info.rating}',category='${info.category}' WHERE  ratingID= ${id}`;
//   const sql = `UPDATE userRating SET ratingName= '${info.ratingName}',price='${info.price}',rating=${info.rating} ,category='${info.category}' WHERE  ratingID= ${id}`;
// const data = await dal.executeAsync(sql);
// return data.affectedRows === 0 ? null : data;
// }

// async function updatePartialRatingAsync(id, rating) {
//   let sql = `UPDATE userRating SET `;

//   if(rating.name) {
//     sql += `ratingName = '${rating.name}',`
//   }
//   if(rating.price) {
//     sql += `price = ${rating.price},`
//   }
//   if(rating.rating) {
//     sql += `rating = ${rating.rating},`
//   }
//   if(rating.category) {
//     sql += `category = '${rating.category}',`
//   }
//   sql = sql.substr(0, sql.length - 1);
//   sql += ` WHERE ratingID = ${id}`;

//   const info = await dal.executeAsync(sql);

//   return info.affectedRows === 0 ? null : rating;
// }

// async function deleteRatingAsync(id) {
//   const sql = `DELETE FROM userRating WHERE ratingID = ${id}`;
//   const rating = await dal.executeAsync(sql);
//   return rating;
// }




module.exports = { getAllratingsAsync,getOneratingAsync, 
  AddOneRatingAsync 
  //  updateRatingAsync, updatePartialRatingAsync,
  // deleteRatingAsync, 
};
