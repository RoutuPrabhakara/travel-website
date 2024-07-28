import React from 'react'
import Navabar from './Components/Navabar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './Components/About'
import Service from './Components/Service'
import Signup from './Components/Signup'
import Contacts from './Components/Contacts'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navabar/>
      <BrowserRouter>
      <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Destination/>
      <Footer/>
    </div>
  )
}

export default App