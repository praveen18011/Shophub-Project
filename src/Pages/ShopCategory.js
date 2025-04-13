import React, { useContext } from 'react'
import './Scss/ShopCategory.scss'
import { ShopContext } from '../Common/Context/ShopContext'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Item from '../Common/Item/Item';
import { RiArrowDropDownLine } from "react-icons/ri";

function ShopCategory(props) {
  // const ShopCategory =()=>{
     const {all_products} = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <Header/>
      <img className='banner' src={props.banner} alt='Banner'/>
      <div className='shopcategory-indexsort'>
        <p><span>Showing 1-12</span> Out of 39 Products</p>

        <div className='shopcategory-sort'>
          <p>Sort by<RiArrowDropDownLine /></p>
        </div>

      </div>

      <div className='shopcategory-products'>
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <Footer/>
    </div>
  )
}
export default ShopCategory;