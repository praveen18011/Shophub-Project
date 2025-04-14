import './App.css';
import { BrowserRouter as Router , Routes , Route }  from 'react-router-dom';
import Header from './Common/Header';
import Shop from './Pages/Shop';
import Footer from './Common/Footer';
import Popular from './Common/Popular/Popular';
import Offers from './Common/Offers/Offers';
import NewCollections from './Common/NewCollections/NewCollections';
import Item from './Common/Item/Item';
import Home from './Common/Home/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import men_banner from './Common/Images/Men banner.jpg'
import women_banner from './Common/Images/Women banner.jpg'
import kids_banner from './Common/Images/Kids banner.jpg'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Breadcrum from './Common/Breadcrums/Breadcrum';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="Men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="Women"/>}/>
          <Route path='/kid' element={<ShopCategory banner={kids_banner} category="Kid"/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/newcollections' element={<NewCollections/>}/>
          <Route path='/item' element={<Item/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/breadcrum' element={<Breadcrum/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
