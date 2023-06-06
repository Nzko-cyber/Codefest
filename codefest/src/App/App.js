import React from 'react'
import './App.css'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/banner'
import {BrowserRouter, Route,Router,Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Navbar from '../Components/Navbar/Navbar'

export default function App() {
  return (

    <div className='main'>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
      
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
