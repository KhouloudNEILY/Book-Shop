import React, { useState } from "react";



const Add = (props) => {
const [title,setTitle]=useState('')
const [author,setAuthor]=useState('')
const [imageUrl,setImageUrl]=useState('')
const [quantity,setQuantity]=useState('')
const [price,setPrice]=useState('')


return(
 <div>
<article>
<form>
  <div>
<div class="container">
  <h1>Ajouter un livre </h1>

  <label for="Title">
    <b>Titre</b>
  </label>
  <input type="text" onChange={(e)=>{setTitle(e.target.value)}}   placeholder="Entrer Titre"/>

  <label for="Author">
    <b>Auteur</b>
  </label>
  <input
    type="text"  onChange={(e)=>{setAuthor(e.target.value)}} placeholder="Entrer Auteur"/>

  *
  <label for="Quantité">
    <b>Quantité</b>
  </label>
  <input
    type="text" onChange={(e)=>{setQuantity(e.target.value)}}
    placeholder="Entrer Qunatité"
    
  />

  <label for="Prix">
    <b>Prix</b>
  </label>
  <input
    type="text"  onChange={(e)=>{setPrice(e.target.value)}}
    placeholder="Entrer Prix"
        required
  />

<label for="Image">
    <b>Ajouter Image</b>
  </label>
  <input type="text" onChange={(e)=>{setImageUrl(e.target.value)}} placeholder="Ajouter Image"/>

</div>

<button class="registerbtn" onClick={()=>{props.add(title,author,imageUrl,quantity,price)}}>
  Ajouter
</button>
</div>
</form>
</article>
</div>

);
}



export default Add;