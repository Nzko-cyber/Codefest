import React from 'react'
import { IconContext } from 'react-icons/lib'
import {FiSearch} from 'react-icons/fi'
import "../Navbar/Navbar.css"

export default function Input() {
  return (
    <>
      <div className='nav_input'>

        <input type='search' placeholder='Search'></input>
        <IconContext.Provider
          value={{ color: 'blue', size: '34px' }}>
          <FiSearch />

        </IconContext.Provider>

      </div>

    </>
  )
}
