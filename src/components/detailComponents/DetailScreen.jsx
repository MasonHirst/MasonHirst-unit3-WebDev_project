import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const DetailScreen = () => {
   const {id} = useParams()
   const [recipeData, setRecipeData] = useState({})
   
   console.log(id)

   useEffect(() => {
      axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
         setRecipeData(res.data)
      })
   }, [])

   const { recipe_name, prep_time, cook_time, serves, ingredients, instructions, image_url } = recipeData

   const ingredientsDisplay = ingredients?.map((item) => {
      return (
         <div>
            <p>{item.quantity} {item.ingredient}</p>
         </div>
      )
   })
   
   
return (
      <section className="detail-screen">
            <div className="recipe-banner"
               style={{
                  background: `linear-gradient(
                  190deg,
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.8)),
                  url(${image_url})`,
                  backgroundSize: "cover",
               }}
            >
               <h1 className="detail-banner__title">{recipe_name}</h1>
            </div>

            <div className="detail-screen__detail-container">
               <div className="detail-screen__detail-div">
                  <h3 className="detail-screen__detail-h3">Recipe</h3>
                  <p>Prep time: {prep_time}</p>
                  <p>Cook Time: {cook_time}</p>
                  <p>Serves: {serves}</p>
                  <br/>
                  <h3 className="detail-screen__detail-h3">Ingredients</h3>
                  {ingredientsDisplay}
               </div>

               <div className="detail-screen__detail-div">
                  <h3 className="detail-screen__detail-h3">Instructions</h3>
                  <p>{instructions}</p>
               </div>
            </div>
      </section>
);
};
    

export default DetailScreen;
