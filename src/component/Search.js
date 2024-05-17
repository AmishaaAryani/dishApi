import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Food from './Food'
import { useParams } from 'react-router-dom'

const Search = () => {


    const [filterData, setFilterData] = useState([]);
    const { idMeal } = useParams()
    const { term } = useParams()
    

    const getApi = async () => {

        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`);

    };

    useEffect(() => {
        getApi()
    }, []);

    const[searchItem,setSearchItem] = useState("")
    const setValue = (input_value) => {
        setSearchItem(input_value)
         getApi()
    }
 
  

    useEffect(()=>{

    },[term])


    return (
        <>

             <Food getApi={filterData} /> 
        </>
    )
}

export default Search
