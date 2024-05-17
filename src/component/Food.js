import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";



const Food = ({ cart, setCart }) => {
    const addToCart = (idMeal, strMeal, strMealThumb) => {
        const obj = {
            idMeal, strMeal, strMealThumb
        }
        setCart([...cart, obj])
    }
    const navigate = useNavigate();
    const [myData, setMyData] = useState([])



    const getApi = async (searchTerm = '') => {

        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        setMyData(res.data.meals)
    };

    const [searchTerm, setSearchTerm] = useState("")



    useEffect(() => {
        getApi();
    }, []);

    const amihsu = (() => {


        getApi(searchTerm);

    })



    return (

        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h3 className='title'>  &#127869;   Foodie_ folly  </h3>



                    <form

                        className="d-flex " role="search">
                        <input className="form-control me-2 "

                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="search" placeholder="Search-Food"
                            aria-label="Search" />

                        <button className="btn btn-outline-success" onClick={e => amihsu()} type="button">Search</button>


                        <Link to={'/cart'} className='cart'>
                            <button type="button" className="btn btn-light position-relative mx-3">
                                <GrFavorite />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>

                        </Link>

                    </form>
                </div>
            </nav>
            <div className='container my-5'>
                <div className='row'>

                    {

                        myData.map((meals) => {

                            const { idMeal, strMeal, strMealThumb } = meals;
                            return (
                                <>


                                    <div key={meals.idMeal} className='col-lg-4 col-md-6 my-2 text-center'>
                                        <div className="card" style={{ width: "18rem" }}>

                                            <Link to={`/meals/${meals.strMeal}`}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                <img
                                                    src={strMealThumb}
                                                    className="card-img-top" width="100%" />
                                            </Link>

                                            <div className="card-body">
                                                <h5 className="card-title ">{strMeal} 	</h5>

                                                <a href="#"
                                                    onClick={() => addToCart(meals.idMeal, meals.strMeal, meals.strMealThumb)}
                                                    className="btn"><GrFavorite /></a>
                                            </div>
                                        </div></div>
                                </>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )



}

export default Food;
