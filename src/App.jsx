import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './components/Homepage'
import { RouterProvider } from 'react-router-dom'
import router from './Router/MainRouter'

function App() {
  
  



  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
