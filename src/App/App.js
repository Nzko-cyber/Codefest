import React from 'react'
import './App.css'
import Footer from '../components/Footer/Footer'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import UserPage from '../Pages/UserPage/UserPage'

export default function App() {
  return (

    <div className='app'>
      <Navbar/>
      <div className='global'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<UserPage/>}/>
      </Routes>
      
      
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}
