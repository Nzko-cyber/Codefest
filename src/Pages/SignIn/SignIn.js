import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
    <div className='sign_page'>
      <form className='sign_up_form-card'>
        <h3 className='sign_up_title'>
          Kirish
        </h3>
        <input className='sign_input' type="text" placeholder='Telefon raqamingiz'/>
        <input className='sign_input' type="password" placeholder='parolni kiriting'/>
        <button className='sign_input sign_btn'>Kirish</button>
      </form>
    </div>
  )
}

export default SignIn