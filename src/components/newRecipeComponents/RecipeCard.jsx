import React from 'react'
import { useNavigate } from 'react-router-dom'


const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()
    const handleClick = () => {
      //   console.log(recipe.recipe_id)
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    
    
  return (
    <div className='recipe-card-container'>
        <div className='card-img-container'>
            <img alt={`${recipe.recipe_name}`} className='card-img' src={recipe.image_url}></img>
        </div>
        <h3 className='recipe-name-text'>{recipe.recipe_name}</h3>
        <button 
            className='blue-btn recipe-detail-btn'
            onClick={handleClick}
        >See More</button>
    </div>
  )
}


export default RecipeCard