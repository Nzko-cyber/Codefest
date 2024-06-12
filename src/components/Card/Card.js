import React from 'react'
import './Card.css'
import cardImage from '../../assets/img/akkumulyator.png'

function Card() {
  return (
    <div id='bttn' className='card_body'>
      <img className='card_image' src={cardImage} alt="Cards" />
      <h3 className='card_title'>Akkumulyator</h3>
      <p className='card_description'>Батарея аккумуляторная "S4 Silver", 12в 60а/ч</p>
      <span className='card_price'>Цены от 12 739 ₽</span>
    </div>
  )
}

export default Card