import React from "react";
import ListBook from "./ListBook.jsx";




const List = (props) => (
  <div>
   
    {props.book.map((book, index) => (
      <div key={index}>
        <ListBook book={book}  remove={props.remove} updateBook={props.updateBook} />
      </div>
    ))}
  </div>
);



export default List;
