import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data")}
      const jsonData = await response.json()
      setData(jsonData)
  } catch (err) {
    console.error(err)
  }

  useEffect(()=>{
    fetchData()
  },[])
}

export default App;