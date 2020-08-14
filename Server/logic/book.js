const dal = require("../data/dal");
async function getAllbooksAsync() {
  const sql = "SELECT * FROM titles";
  const books = await dal.executeAsync(sql);
  return books;
}
async function getOnebookAsync(id) {
  const sql = `SELECT * FROM titles WHERE bookID = ${id}`;
  const book = await dal.executeAsync(sql);
  return book;
}
async function getAllbooksFromCatAsync(cat) {
  const sql = `SELECT * FROM titles WHERE category = '${cat}'`;
  const books = await dal.executeAsync(sql);
  return books;
}

async function updateBookAsync(id, info) {
  console.log(id,info)
  // const sql = `UPDATE titles SET bookName= '${info.bookName}',price='${info.price}',rating='${info.rating}',category='${info.category}' WHERE  bookID= ${id}`;
  const sql = `UPDATE titles SET bookName= '${info.bookName}',price='${info.price}',rating=${info.rating} ,category='${info.category}' WHERE  bookID= ${id}`;
const data = await dal.executeAsync(sql);
return data.affectedRows === 0 ? null : data;
}

async function updatePartialBookAsync(id, book) {
  let sql = `UPDATE titles SET `;

  if(book.name) {
    sql += `bookName = '${book.name}',`
  }
  if(book.price) {
    sql += `price = ${book.price},`
  }
  if(book.rating) {
    sql += `rating = ${book.rating},`
  }
  if(book.category) {
    sql += `category = '${book.category}',`
  }
  sql = sql.substr(0, sql.length - 1);
  sql += ` WHERE bookID = ${id}`;

  const info = await dal.executeAsync(sql);

  return info.affectedRows === 0 ? null : book;
}

async function deleteBookAsync(id) {
  const sql = `DELETE FROM titles WHERE bookID = ${id}`;
  const book = await dal.executeAsync(sql);
  return book;
}

async function AddOneBookAsync(info) {
  const sql = `INSERT INTO titles (bookName, price, category, rating) VALUES ('${info.bookName}', ${info.price}, 
  '${info.category}',${info.rating})`;
  const books = await dal.executeAsync(sql);
  return books;
}


module.exports = { getAllbooksAsync,getOnebookAsync, 
  getAllbooksFromCatAsync, updateBookAsync, updatePartialBookAsync,
  deleteBookAsync, AddOneBookAsync };
