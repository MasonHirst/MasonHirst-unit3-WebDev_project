import React, { useState, useRef } from "react";


const NewRecipeScreen = () => {
   const initialValues = {
      type: "",
      recipeName: "",
      imageURL: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: [],
      instructions: "",
   }

   const onSubmit = (values) => {
      console.log(values)
   }

   const [ingredientData, setIngredientsData] = useState([])
   const ingredientRef = useRef()
   const quantityRef = useRef()

   const ingredientAddHandler = () => {
      let quantity = quantityRef.current.value
      let ingredient = ingredientRef.current.value
      if (quantity !== '' && ingredient !== '') {
         setIngredientsData([...ingredientData, [quantity + ' ' + ingredient]])
         quantityRef.current.value = ''
         ingredientRef.current.value = ''
         ingredientRef.current.focus()
      } else {
         alert('You need to fill out Ingredient and Quantity fields')
      }
   }

   // console.log(ingredientData)
   const addedIngredientsDisplay = ingredientData.map((item) => {
         return <li>{item}</li>
      })
   
  return (
    <section className="main-display-container">
      <h1 className="add-recipe__title">Tell us about your Recipe!</h1>
      
      <form className="add-recipe__form">
         <div className="add-recipe__first-inputs">
            <input className="full-input input-text" placeholder="Name"/>
            <input className="full-input input-text" placeholder="ImageURL"/>
         </div>

         <div className="radio-btns-div">
            <span className="radio-spans">
               <input className="radio-btn input-text" type='radio' id="cook-option" name="recipe-type" value="Cook"/>
               <label className="input-text" for="cook-option">Cook</label>
            </span>
            <span className="radio-spans">
               <input className="radio-btn input-text" type='radio' id="bake-option" name="recipe-type" value="Bake"/>
               <label className="input-text" for="bake-option">Bake</label>
            </span>
            <span className="radio-spans">
               <input className="radio-btn input-text" type='radio' id="drink-option" name="recipe-type" value="Drink"/>
               <label className="input-text" for="drink-option">Drink</label>
            </span>
         </div>

         <div className="form__basic-numbers-div">
            <input className="smaller-input input-text" placeholder="Prep Time"/>
            <input className="smaller-input input-text" placeholder="Cook Time"/>
            <input className="smaller-input input-text" placeholder="Serves"/>
         </div>
         
         <div className="add-recipe__ingredient-form">
            <section className="add-recipe__inputs-ul">
               <div className="add-recipe__list-inputs">
                  <input className="full-input input-text" placeholder="Ingredient" ref={ingredientRef}/>
                  <input className="full-input input-text" placeholder="Quantity" ref={quantityRef}/>
               </div>
               <ul className="add-recipe__ul">
                  {addedIngredientsDisplay}
               </ul>
            </section>
            <button type="button" className="blue-btn orange-color" onClick={ingredientAddHandler}>Add Another</button>
         </div>

         <textarea className="input-text" rows="5" name="instructions-input" placeholder="What are the instructions?"/>
         
         <button className="blue-btn">Save</button>
      </form>
    </section>
  )
}


export default NewRecipeScreen;
