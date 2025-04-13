import React from 'react'
import Header from '../Common/Header'
import Home from '../Common/Home/Home'
import Popular from '../Common/Popular/Popular'
import Offers from '../Common/Offers/Offers'
import NewCollections from '../Common/NewCollections/NewCollections'
import Footer from '../Common/Footer'

function Shop() {
  return (
    <div>
     <Header/>
     <Home/>
     <Popular/>
     <Offers/>
     <NewCollections/>
     <Footer/>
    </div>
  )
}

export default Shop