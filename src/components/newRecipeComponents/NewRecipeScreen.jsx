import React, { useState, useRef } from "react";
import { Formik } from 'formik'


const NewRecipeScreen = () => {
   const initialValues = {
      type: "",
      recipeName: "",
      imageURL: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: [],
      instructions: ""
   }

   const onSubmit = (values) => {
      values.ingredients = ingredients
      console.log(values)
   }

   const nameRef = useRef()
   const quantityRef = useRef()


   const [ingredients, setIngredients] = useState([])
   const [name, setName] = useState('')
   const [quantity, setQuantity] = useState('')

   const addIngredient = () => {
      setIngredients([...ingredients, {name, quantity}])
      nameRef.current.value = ''
      quantityRef.current.value = ''
      nameRef.current.focus()
   }

   const addedIngredientsDisplay = ingredients.map((item) => {
      return <li>{item.quantity} {item.name}</li>
   })
   
  return (
    <section className="main-display-container">
      <h1 className="add-recipe__title">Tell us about your Recipe!</h1>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
         {({values, handleChange, handleSubmit}) => (
               <form className="add-recipe__form" onSubmit={handleSubmit}>
                  <div className="add-recipe__first-inputs">
                     <input 
                        className="full-input input-text" 
                        placeholder="Name" 
                        onChange={handleChange} 
                        value={values.recipeName}
                        name="recipeName"
                     />
                     <input 
                        className="full-input input-text" 
                        placeholder="ImageURL" 
                        onChange={handleChange} 
                        value={values.imageURL}
                        name="imageURL"
                     />
                  </div>

                  <div className="radio-btns-div">
                     <span className="radio-spans">
                        <input 
                           className="radio-btn input-text" 
                           type='radio' 
                           id="cook-option" 
                           name="type" 
                           value={values.type} 
                           onChange={handleChange}
                        />
                        <label className="input-text" for="cook-option">Cook</label>
                     </span>
                     <span className="radio-spans">
                        <input 
                           className="radio-btn input-text" 
                           type='radio' 
                           id="bake-option" 
                           name="type" 
                           value={values.type} 
                           onChange={handleChange}
                        />
                        <label className="input-text" for="bake-option">Bake</label>
                     </span>
                     <span className="radio-spans">
                        <input 
                           className="radio-btn input-text" 
                           type='radio' 
                           id="drink-option" 
                           name="type" 
                           value={values.type} 
                           onChange={handleChange}
                        />
                        <label className="input-text" for="drink-option">Drink</label>
                     </span>
                  </div>

                  <div className="form__basic-numbers-div">
                     <input 
                        className="smaller-input input-text" 
                        placeholder="Prep Time" 
                        onChange={handleChange} 
                        value={values.prepTime}
                        name="prepTime"
                     />
                     <input 
                        className="smaller-input input-text" 
                        placeholder="Cook Time" 
                        onChange={handleChange} 
                        value={values.cookTime}
                        name="cookTime"
                     />
                     <input 
                        className="smaller-input input-text" 
                        placeholder="Serves" 
                        onChange={handleChange} 
                        value={values.serves}
                        name="serves"
                     />
                  </div>
                  
                  <div className="add-recipe__ingredient-form">
                     <section className="add-recipe__inputs-ul">
                        <div className="add-recipe__list-inputs">
                           <input 
                              className="full-input input-text" 
                              placeholder="Ingredient"
                              onChange={(e) => setName(e.target.value)}
                              ref={nameRef}
                           />
                           <input 
                              className="full-input input-text" 
                              placeholder="Quantity"
                              onChange={(e) => setQuantity(e.target.value)}
                              onkeydown={(event) => {
                                 if (event.keyCode === 13) {
                                    addIngredient()
                                 }
                              }}
                              ref={quantityRef}
                           />
                        </div>
                        <ul className="add-recipe__ul">
                           {addedIngredientsDisplay}
                        </ul>
                     </section>
                     <button type="button" className="blue-btn orange-color" onClick={addIngredient}>Add Another</button>
                  </div>

                  <textarea 
                     className="input-text" 
                     rows="5" 
                     placeholder="What are the instructions?" 
                     onChange={handleChange} 
                     value={values.instructions}
                     name="instructions"
                  />
                  
                  <button className="blue-btn">Save</button>
               </form>
            )
         }
      </Formik>
    </section>
  )
}


export default NewRecipeScreen;
