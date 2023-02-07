import React, { useState } from "react";



const Add = (props) => {
const [description,setDescription]=useState('')
const [quantity,setQuantity]=useState('')



return(
  <div>
   <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
   <input type="number" onChange={(e)=>{setQuantity(e.target.value)}}/>
   <button onClick={()=>{props.add(description,quantity)}}>Add</button>
  </div>
);
}


export default Add;