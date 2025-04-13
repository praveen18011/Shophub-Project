import React from 'react'
import './Popular.scss'
import exclusive_product from '../Assets/Exclusive'
import Item from '../Item/Item'

function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR FOR MENS</h1>
        <hr/>

        <div className='popular-item'>
            {exclusive_product.map((item,i)=>{
               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular