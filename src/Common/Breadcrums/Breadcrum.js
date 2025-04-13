import React from 'react'
import './Breadcrum.scss'
import right_arrow from '../Images/Right arrow.png'

function Breadcrum(props) {
  // const Breadcrum =()=>{
    const {product} = props;
    
   return (
    <div className='breadcrum'>
      <label>Home</label>
      <img src={right_arrow} alt=''/> 
      <label>Shop</label>
      <img src={right_arrow} alt=''/> 
      <label>{product.category}</label> 
      <img src={right_arrow} alt=''/> 
      <label className='productname'>{product.name}</label>
    </div>
   )
  // }
}

export default Breadcrum;