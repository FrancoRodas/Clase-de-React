import { useState } from 'react'
import './App.css'
import {button} from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count)) => count + 1)
  }

  return (
    <>
        <button label='{Count is ${count}' parentMethod={countMore}/>
    </>
  )
}

export default App
