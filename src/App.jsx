import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Notes from './components/Notes.jsx'
import { ColorProvider } from './context/colorContext.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <ColorProvider>
      <div className='flex w-screen overflow-hidden'>
        <Navbar></Navbar>
        <Notes></Notes>
      </div>
    </ColorProvider>
    
      
    </>
  )
}

export default App
