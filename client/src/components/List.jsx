import React from "react";
import ListBook from "./ListBook.jsx";



const List = (props) => (
  <div>
    <h4>List Component</h4>
   {props.book.map((e,i)=>{
   return <ListBook ee={e} remove={props.remove}/>
   })}
  </div>
);



export default List;
