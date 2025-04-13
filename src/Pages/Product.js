import React, { useContext } from 'react'
import './Scss/Product.scss'
import { ShopContext } from '../Common/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Common/Breadcrums/Breadcrum';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Productdisplay from '../Common/Productdisplay/Productdisplay';
import Descriptionbox from '../Common/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Common/Descriptionbox/Relatedproducts/Relatedproduct';

function Product() {
  // const Product =()=>{
    const{all_products}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=>e.id === Number(productId));

   return (
    <div className='product'>
      <Header/>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      {/* <Popular/> */}
      <Relatedproduct/>
      {/* <NewCollections/> */}
      <Footer/>
    </div>
   )
  // }
}

export default Product