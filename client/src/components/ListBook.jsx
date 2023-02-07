import React ,{useState}from 'react';

const ListBook = (props) => (
  
  <pre>
    {console.log(props)}
  {props.ee.description}  {props.ee.quantity}

  <button onClick={()=>{props.remove(props.ee.description)}}>Delete</button>
      <button>Update</button>
  </pre>
)


export default ListBook;