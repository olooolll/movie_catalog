import { useState } from 'react'
import NavBar from '@/components/navgation/Navgation.jsx'
import './App.css'
import Navgation from "@/components/navgation/Navgation.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Navgation/>
)
}

export default App
