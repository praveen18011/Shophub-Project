import React, { useContext } from 'react'
import './Productdisplay.scss'
import rating_star from '../Images/Rating star.png'
import { ShopContext } from '../Context/ShopContext';


function Productdisplay(props) {
    const {product}= props;
    const{addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      
      <div className='productdisplay-left'>
        <div className='productdisplay-img'>
           <img src={product.image} alt=''/>
        </div>
      </div>

      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={rating_star} alt='Rating Star'/>
            <p>(324)</p>
        </div>
        
        <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-price-new'>
               ₹.{product.new_price}
            </div>
            <div className='productdisplay-right-price-old'>
               <s>₹.{product.old_price}</s>
            </div>
        </div>

        <div className='productdisplay-right-description'>
            <p></p>
        </div>

        <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='sizes'>
              <label>S</label>
              <label>M</label>
              <label>L</label>
              <label>XL</label>
              <label>XXL</label>
            </div>
        </div>
        <div className='cart-buy'>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button> 
        <button>Buy Now</button>
        </div>
        
        <p className='productdisplay-right-category'><span>Category:</span>Women,T-shirt,Crop top</p>
        <p className='productdisplay-right-tag'><span>Tags:</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default Productdisplay