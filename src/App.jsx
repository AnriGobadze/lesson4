import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("")
  const [list, setList] = useState([])

  function fillArray() {
    setList( [...list, text] )
  }

  function removeItem(index) {
    setList(list.filter( (item, i) => i!==index))


  }



  return (
    <>
    <div className='card'>
      <input onKeyUp={ (e)  => setText(e.target.value)} type="text" />
      <button onClick={fillArray} >ADD</button>
      <ul>
        {
          list.map( (el, i) => (
            <li>{el} <button onClick={() => removeItem(i) } >x</button></li>

          ))
        }


      </ul>
    </div>


      
    </>
  )
}

export default App
