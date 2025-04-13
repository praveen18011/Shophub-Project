import React from 'react'
import './Home.scss'
import hand_image from '../Images/Hand image.png'
import home_image from '../Images/Home image.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='home-left'>
        <div className='hand-image'>
          <h2>WELCOME TO <span>SHOP</span>HUB</h2>
          <img src={hand_image} alt='Hand image'/>
        </div>

        <div className='home-description'>
         <p>Happy Newyear 2025</p>
         <label>New collections arrived</label>
         <label>Don't delay <br/> come and shop friends</label>
        </div>
        
        <Link to={"/shop"}>
         <div className='shop-btn'>
           <p className='shop'>Shop</p>
           <label><FaLongArrowAltRight /></label>
         </div>
        </Link>
        

      </div>

      <div className='home-right'> 
         <img src={home_image} alt='Home image'/>
      </div>
    </div>
  )
}

export default Home
