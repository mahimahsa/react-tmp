//import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from '../view/index'

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App
