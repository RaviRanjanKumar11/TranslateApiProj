import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TranslatePage from './Pages/TranslatePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TranslatePage />
    </>
  )
}

export default App
