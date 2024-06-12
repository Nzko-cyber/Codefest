import React from 'react'
import './Navbar.css'
import call from '../../assets/images/Navbar/call.png'
import location from '../../assets/images/Navbar/fir.png'
import profile from '../../assets/images/Navbar/per.png'
import {FiSearch} from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'
import logo from '../../assets/images/Navbar/logo.png' 
import catalog from '../../assets/images/Navbar/catalog.svg'
import {SlBasket} from 'react-icons/sl'
function Navbar() {
  return (
    <>
    <div className='Navbar'>
     <div className='logo'>
      <img src={logo} alt="" />


     </div>
     <div className='nav_input'>

      <input type='search' placeholder='Search'></input>
      <IconContext.Provider
      value={{color:'blue',size:'34px'}}>
      <FiSearch/>

      </IconContext.Provider>
      
     </div>
     <div className='right_nav'>
      <img src={location} className='fir_img' alt="" />
       <img src={call} className='sec_img' alt="" />
       <img src={profile} alt="" />     
      
     </div>


    </div>
    <div className='sec_inp'>
      <img src={catalog} alt="" />

    <div className='nav_input' id='second'>

      <input type='search' placeholder='Search'></input>
      <IconContext.Provider
      value={{color:'blue',size:'34px'}}>
      <FiSearch/>

      </IconContext.Provider>
      
     </div>
    </div>

    </>
  )
}

export default Navbar