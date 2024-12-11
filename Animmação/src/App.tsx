import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/my'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="">
      <MyComponent/>
     </div>
       
    </>
  )
}

export default App
