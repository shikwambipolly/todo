import { Button } from "@/components/ui/button"
import './App.css' 

interface todo {
  id: number,
  action: string,
  complete: boolean
}

function App() {

  return (
    <body>
      <div id='todohead'>
        <h1>My Todos</h1>
      </div>
      <div id='adddiv'>
        <Button id="addbutton" variant="outline">Add ToDo</Button>
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
