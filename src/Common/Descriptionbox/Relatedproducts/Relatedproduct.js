import React from 'react'
import './Relatedproduct.scss'
import exclusive_product from '../../Assets/Exclusive'
import Item from '../../Item/Item'
function Relatedproduct() {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr/>
      <div className='relatedproduct-item'>
        {exclusive_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Relatedproduct