
import React from 'react';

  

  const ListBook = (props) => (

 <div class="row">
  <div class="column">
    <div class="card">
    <img src= {props.book.imageUrl}  />
    <h1>{ props.book.title}</h1>
    <p class="price">{props.book.price}{' DNT'}</p>
    <p class="quantity"> {'En stock :'}{props.book.quantity}</p>
    <br/> <input type="number" id="lname" name="lname"></input>
    <br />
    <br/> <p><button class="btquantity"  onClick={()=>{props.updateBook(props.book.quantity)}} >Update </button> </p>
    
    <br /> <p><button class="supprimer"  onClick={()=>{props.remove(props.book.title)}}>Supprimer</button></p>
    
 
  </div>
  </div>
  </div>  
 
  )




export default ListBook;