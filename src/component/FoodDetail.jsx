
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const FoodDetail = ({ }) => {
  const { idMeal } = useParams()
  const [meals, setMyData] = useState([])

  const getApi = async () => {

    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal} `);
    setMyData(res.data.meals[0])
  };
  useEffect(() => {
    getApi();
  }, []);




  return (
    <>

      <div className='container'>
        <div className='img'>
          <img src={meals.strMealThumb} />
        </div>
        <p className="card-text text-center">{meals.strMeal} &#x1F394;</p>
        <a href="#" className="btn btn-primary  btn-sm  mx-3">Add-to-fav</a>
        <div className="card-body ">{meals.strInstructions} </div>
      </div>

    </>
  )



}

export default FoodDetail
