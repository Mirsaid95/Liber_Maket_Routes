import { useState } from 'react'
import './App.css'
import { Router,Routes,Route} from'react-router-dom'
import { Home } from './components/pages/Home/home'
import { Accaunt } from './components/pages/admin/infoProfil/profil'



function App() {
  return (
    <>
      <div>
        {/* <Home/> */}
        <Accaunt/>
      </div>
    </>
  )
}

export default App
