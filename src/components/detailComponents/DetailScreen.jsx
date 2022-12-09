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
   
   
return (
      <section className="detail-screen">
            <div className="recipe-banner"
               style={{
                  background: `linear-gradient(
                  190deg,
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.8)),
                  url('https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
                  backgroundSize: "cover",
               }}
            >
               <h1></h1>
            </div>
      </section>
);
};
    

export default DetailScreen;
