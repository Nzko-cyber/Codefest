import React from 'react'
import recdatas from '../../Data/Recomends/Rec_data'
import { BsArrowRight } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import './Rec.css'
export default function Rec() {

    return (
            <div className='Rec'>
                {
                    recdatas.map((item, index) =>

                    (


                        <div className='rec_card' key={index} >
                            <div className='rec_desc'>
                                {item.title}
                                <span>Batafsil
                                    <IconContext.Provider value={{ color: 'white' }}>
                                        <BsArrowRight />
                                    </IconContext.Provider>
                                </span>
                            </div>
                            <img className='img_rec'  src={item.img} alt="" />


                        </div>

                    ))



                }
            </div>
    )
}
