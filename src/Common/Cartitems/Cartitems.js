import React, { useContext } from 'react'
import './Cartitems.scss'
import { ShopContext } from '../Context/ShopContext'

function Cartitems() {
    const{getTotalCartAmount,all_products,cartItems,removeFromCart}=useContext(ShopContext);
    if(!ShopContext){
      return<div>Error:ShopContext not provided.</div>
    }
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>

      {all_products.map((e)=>{
        if(cartItems[e.id]>0){
            return <div key={e.id}>
                     <div className='cartitems-format cartitems-format-mai'>
                       <img src={e.image} alt=''/>
                       <p>{e.name}</p>
                       <p> ₹.{e.new_price}</p>
                       <button>{cartItems[e.id]}</button>
                       <p> ₹.{e.new_price*cartItems[e.id]}</p>
                       <label onClick={()=>{removeFromCart(e.id)}}>Remove</label>
                     </div>
                     <hr/>
                   </div>
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
                <div className='cartitems-total-item'>
                   <p>Subtotal</p>
                   <p>₹.{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>₹.{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed to Checkout</button>
        </div>
        <div className='cartitems-promocode'>
           <p>If you have a promo code, Enter it here</p>
           <div className='cartitems-promobox'>
             <input type='text' placeholder='Promo Code'/>
             <button>Submit</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems;