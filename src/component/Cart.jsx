import React from 'react'
import { Link } from 'react-router-dom'
import Food from './Food'

const Cart = ({cart,setCart}) => {
console.log(cart)
  return (
    <>
     <div classNameName='container my-5' style={{width:"50%"}}>

     {cart.map((meals) =>{
      return(
        <>
        <div className="card mb-3 my-5" style={{width:'700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={meals.strMealThumb} className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{meals.strMeal}</h5>
        
      </div>
    </div>
  </div>
</div>
        </>
      )
     })}
     

     </div>
    </>
  )
}

export default Cart
