const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});

const selectAll = (callback) => {
  connection.query("SELECT * FROM book", callback);
};
const selectOne =(params,callback) => {
  
  connection.query('SELECT * FROM `book`where `id`=?',[params.id], callback)
    
  };
const addBook  = (callback, body) => {
  console.log(body)
  connection.query('INSERT INTO book (title,author,imageUrl,quantity,price) VALUES(?,?,?,?,?)', [body.title,body.author,body.imageUrl,body.quantity,body.price], callback)

}
const removeBook = (callback, body) => {
  connection.query('DELETE FROM book WHERE id = ?', [body.id], callback)

}
const upDateBook=(callback,body,params)=>{
  connection.query('UPDATE book SET quantity =? WHERE id=?;', [body.quantity,params],callback)
 
}
module.exports = {
  selectAll, addBook, removeBook ,upDateBook ,selectOne
};
