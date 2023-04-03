import './App.css'

import { RouterProvider } from 'react-router-dom'
import router from './Router/MainRouter'

function App() {

  return <RouterProvider router={router}/>
  
}

export default App
