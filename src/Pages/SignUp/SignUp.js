import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className='sign_page'>
      <form className='sign_up_form-card'>
        <h3 className='sign_up_title'>
          Ro'yxatdan o'tish
        </h3>
        <input className='sign_input' type="text" placeholder='Ismingiz' />
        <input className='sign_input' type="text" placeholder='Familiyangiz'/>
        <input className='sign_input' type="text" placeholder='Telefon raqamingiz'/>
        <select className='sign_input' placeholder='Viloyatingiz kiriting'>
          <option key="viloyatingiz" hidden>Viloyatingiz</option>
          <option key="samarqand">Samarqand</option>
          <option  key="andijon">Andijon</option>
          <option key="qashqadaryo">Qashqadaryo</option>
          <option  key="surxondaryo">Surxondaryo</option>
        </select>
        <select className='sign_input' placeholder='Tumaningiz kiriting'>
          <option key="tumaningiz" hidden>Tumaningiz yoki shahringiz</option>
          <option key="tumaningiz" >Paxtachi</option>
        </select>
        <input className='sign_input' type="password" placeholder='Parol yarating'/>
        <input className='sign_input' type="password" placeholder='Parolni qayta kiriting'/>
        <button className='sign_input sign_btn'>Ro'yxatdan o'tish</button>
      </form>
    </div>
  )
}

export default SignUp