import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto mt-8">
      <Sidebar/>
      <h2 className='text-4x1 text-center'>Main content</h2>
    </div>
  )
}

export default App
