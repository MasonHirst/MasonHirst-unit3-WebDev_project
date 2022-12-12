import searchIcon from "../../assets/search.png";
import React, {useEffect, useState, navigate } from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeCard from '../newRecipeComponents/RecipeCard'


const HomeScreen = () => {
    const [recipes, setRecipes] = useState([])
    const [searchStr, setSearchStr] = useState('')

    const getRecipes = () => {
    axios
        .get("https://recipes.devmountain.com/recipes")
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
  }
  
    useEffect(() => {
        getRecipes()
    },[])


    const setSearch = (e) => {
        setSearchStr(e.target.value)
    }
  

    const recipesDisplay = recipes
        .filter((recipe) => {
            return recipe.recipe_name.toLowerCase().includes(searchStr.toLowerCase())
        })
        .map((recipe) => {
            return <RecipeCard recipe={recipe} />
    })
  

    return (
      <div className='main-display-container'>
         <AdBanner />

            <div className='search-input-container'>
               <img
                    alt='search icon'
                    src={searchIcon}
                    className='search-icon-img'
               />
            
               <input 
                    className='search-input-bar' 
                    placeholder="Search for a recipe"
                    onChange={setSearch}
               />
            </div>

            <div className='recipe-cards-container'>
               {recipesDisplay}
            </div>
      </div>
   )
}

export default HomeScreen