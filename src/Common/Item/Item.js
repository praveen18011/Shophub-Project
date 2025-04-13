import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}  src={props.image} alt=''/></Link>
       <p>{props.name}</p>
       <p>{props.category}</p>
       <div className='item-price'>
         <div className='item-new-price'>
         ₹.{props.new_price}
         </div>

         <div className='item-old-price'>
         <s>₹.{props.old_price}</s>
         </div>
       </div>
    </div>
  )
}

export default Item;