import { useState } from 'react'
import './App.css'
import {Routes,Route} from'react-router-dom'
import { Home } from './components/pages/Home/home'
import { Tab } from './components/pages/admin/admin'



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin/*' element={<Tab/>}/>
          <Route/>
        </Routes>
      </div>
    </>
  )
}

export default App
