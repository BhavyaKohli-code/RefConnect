import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content1 from './Content.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Content1/>
    </>
  )
}

export default App
