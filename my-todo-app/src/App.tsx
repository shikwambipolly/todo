import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

interface todo {
  id: number,
  action: string,
  category: string,
  complete: boolean
}

function App() {

  return (
    <body>
      <div id='todohead'>
        <h1>My Todos</h1>
      </div>
      <div className='grid grid-cols-4 gap-6'>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
      </div>
    </body>
  )
}

export default App
