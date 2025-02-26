import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <hr />
     <div className='app-content'>
      <Sidebar />
     </div>
    </>
  )
}

export default App
