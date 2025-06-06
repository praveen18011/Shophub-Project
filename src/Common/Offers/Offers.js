import React from 'react'
import './Offers.scss'
import exclusive_image from '../Images/Exclusive image.png'
import { Link } from 'react-router-dom'

function Offers() {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <Link to={'/women'}><button>Check Now</button></Link>
      </div>

      <div className='offers-right'>
        <img src={exclusive_image} alt='Exclusive image'/>
      </div>

    </div>
  )
}

export default Offers