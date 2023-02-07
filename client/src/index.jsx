import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import List from './components/List.jsx'
import $ from 'jQuery'
import Add from './components/Add.jsx'


const App = () => {
  
const[book,setBook]=useState([])
const[update,setUpdate]=useState(true)

useEffect(()=>{$.get('/api/book').then((result)=>{
  setBook(result)
  }).catch((error)=>{
    console.log(error);
  })},[update])
  

  return (
    <div>
     <Add add={add}/>
     <List book={book} remove={remove}/>
   
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
