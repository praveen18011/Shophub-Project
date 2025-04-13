import React, { useContext, useRef, useState } from 'react'
import './Header.scss'
import logo from './Images/logo 2.png'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { ShopContext } from './Context/ShopContext';
import { LuMenu } from "react-icons/lu";

function Header() {
  const { getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();
  const dropdown_toggel =(e)=>{
     menuRef.current.classList.toggel('nav-menu-visible');
     e.target.classList.toggel("open")
  }
  
  const[menu,setMenu]=useState("");
  const shop=()=>{
      setMenu("shop")
  }
  const men=()=>{
      setMenu("men")
  }
  const women=()=>{
      setMenu("women")
  }
  const kids=()=>{
      setMenu("kids")
  }
  return (
    <div className='navbar'>
      <a onClick={dropdown_toggel}className='menu'><LuMenu /></a>

      <div className='nav-logo'>
       <Link to={"/"}><img src={logo} alt='Logo'/></Link>
       <p><span>Shop</span>hub</p>
      </div>

       <ul ref={menuRef} className='nav-menu'>
        <li onClick={shop}><Link to={"/shop"}>Shop</Link>{menu==="shop"?<hr/> : <></>}</li>
        <li onClick={men}><Link to={"/men"}>Men</Link>{menu==="men"?<hr/> : <></>}</li>
        <li onClick={women}><Link to={"/women"}>Women</Link>{menu==="women"?<hr/> : <></>}</li>
        <li onClick={kids}><Link to={"/kid"}>Kids</Link>{menu==="kids"?<hr/> : <></>}</li>
       </ul>

       <div className='nav-login-cart'>
          <Link to={"/login"}><button>Login</button></Link>
          {/* <label><CgProfile /></label> */}
          <Link to={"/cart"}><a><IoCartOutline/></a></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
       </div>
     
    </div>
  )
}

export default Header;