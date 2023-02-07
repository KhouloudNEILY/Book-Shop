const express = require("express");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const { selectAll, removeBook, addBook, upDateBook ,selectOne } = require("../database/database-mysql");
 //const { removeItems } = require("../database/database-mysql");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


app.get("/api/book", function (req, res) {
  selectAll((err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(book);
    }
  });

});

app.get("/api/book/:id",function(req,res){
  selectOne((err,book)=>{
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).json(book);
    }
    
  },req.params.id)
})



app.post("/api/book", function(req,res){
  addBook((err,book) =>{
    if(err) res.status(500).send(err);
    else res.status(200).json(book)

    },req.body)
  }) 
  app.delete("/api/book",function(req,res){
    removeBook((err,book) => {
      if(err) res.status(500).send(err);
      else res.status(200).json(book)

    },req.body)
  })


  app.put("/api/book/:id",function(req,res){
   upDateBook((err,book) => {
      if(err) res.status(500).send(err);
      else res.status(200).json(book)

    },req.body,req.params.id)
  })
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
