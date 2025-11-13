import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFrom from './components/InputFrom.jsx'

function App() {

  const initialState =[
    {
      id:1,
      task:"learn",
      description:"learn react"
    },
    {
      id:2,
      task:"practice",
      description:"practice react in detail"
    }
  ]

  const [todoData,setTodoData] = useState(initialState);

  const addTodo = (input)=>{
    const newData = {
      id:new Date().getTime(),
      task:input.task,
      description:input.description
    };

    setTodoData((prev)=>[...prev,newData])
  }

  console.log("to-data",todoData)


  return (
    <>
      <InputFrom addTodo={addTodo}/>
    </>
  )
}

export default App
