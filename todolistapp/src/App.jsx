import { useState } from 'react'
import './App.css'
import TodoList from './components/ToDoList'
import todolistdata from "./utils/todolistdata"
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='container'>
        <Header/>
        <div className='todo_container'>
          <TodoList data={todolistdata} />
        </div>
      </div>
    </>
  )
}

export default App
