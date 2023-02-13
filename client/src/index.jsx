import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import List from './components/List.jsx'
import Add from './components/Add.jsx'
import $ from 'jQuery'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'




const App = () => {
  
const[book,setBook]=useState([])
const[update,setUpdate]=useState(true)

useEffect(()=>{$.get('/api/book').then((result)=>{
  setBook(result)
  }).catch((error)=>{
    console.log(error);
  })},[update])
  
  const add=(title,author,imageUrl,quantity,price)=>{
    $.post('/api/book',{title:title,author:author,imageUrl:imageUrl,quantity:quantity,price:price}).then((result)=>{
      setUpdate(!update)
    }).catch((error)=>{
      console.log(error);
    })}
   
    const remove=(title)=>{
      $.ajax({
        url:"/api/book",
        type:'DELETE',
        data:{title:title},
        success: function (data) {
          setUpdate(!update)
      },
      error: function (error) {
          console.log(error);
      }
      })
    }
    const updateBook =(id,quantity)=>{
       
      $.ajax({
        url:`/api/book/${id}`,
        type:'PUT',
        data:{quantity:quantity},
        success: function (data) {
          setUpdate(!update)
      },
      error: function (error) {
          console.log(error);
      }
      })
    }



  
  return (
    <div>
   <Navbar/>
  
    <br/>
     <List book={book} remove={remove} updateBook={updateBook}/>
    <br/> 
     <Add add={add}   />
     <br/>
     < Footer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
