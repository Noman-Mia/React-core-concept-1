import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
function App() {
      const books =[
        {id : 1, name : "physics", price : 100},
        {id : 2, name : "math", price : 112},
        {id : 3, name : "chemistry", price : 170},
        {id : 4, name : "biology", price : 130}
      ];
      const actors = ["sakib khan","shoriful raj","jasim","rubel","salman shah"];
      const singers = [
        {id : 1, name:"dr: mahfuzur", age:68},
        {id : 2, name:"eva rahman", age:38},
        {id : 3, name:"suvro deb", age:58},
        {id : 4, name:"pritom", age:58}
        
      ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore> books={books}</BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor> )
      }
      <Todo
       task="learn react" isDone={true}></Todo>
      <Todo
       task="explore react" isDone={false}></Todo>
      <Todo 
      task="learn jsx" isDone={true}></Todo>
      <Person></Person>
      <Student grade="A+" score="90"></Student>
      <Student grade="B" score="80"></Student>
      <Student grade="C" score="70"></Student>
      <Developer></Developer>
      <Device name="laptop" price="3000"></Device>
    </>
  )
}

function Device (drops){
  return <h2> This is Device: {drops.name} price : {drops.price}</h2>
}

function Person(){
  const age = 20;
  return <h3>my name is noman khan:{age}</h3>
}


const {grade,score} = {grade:'A+',score:'90'};
function Student ({grade,score}){

  return(
    <div className='student'>
      <h2>this is component</h2>
      <h5>grade:{grade}</h5>
      <p>score:{score}</p>
    </div>
  )
}

function Developer(){
  const devloperStyle={
    padding: "20px",
    margin:"20px",
    border:"2px solid red",
    borderRadius: "20px"
  }
  return(
    <div style={devloperStyle}>
      <h3>this laibray</h3>
      <p>wow wow </p>
      <h5>bah ostat bah</h5>
    </div>
  )
}
export default App
