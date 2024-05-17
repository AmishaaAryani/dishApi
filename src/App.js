import React, { useState } from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Food from './component/Food'
import FoodDetail from './component/FoodDetail';
import Cart from './component/Cart';
import Search from './component/Search'

import "./App.css";
import './index.css';

const App = () => {
  const [cart,setCart] =useState([]) 
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={ <Food  cart={cart} setCart={setCart}/>} exact />
      <Route path='/search/:term' element={ <Search/>}/>
      <Route path='/meals/:idMeal' element={<FoodDetail />} />
          <Route path='/cart' element={<Cart  cart={cart} setCart={setCart}/>} />
    </Routes>
  </BrowserRouter>

 
      </>
   
  )
      


  
    
    
  
};

export default App
