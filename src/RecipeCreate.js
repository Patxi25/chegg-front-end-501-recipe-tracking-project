import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({ handleAddRecipe }) {
  const [name, setName] = useState("");
  const handleNameChange = (event) =>
    setName(event.target.value);
  
  const [cuisine, setCuisine] = useState("");
  const handleCuisineChange = (event) =>
    setCuisine(event.target.value);
  
  const [photo, setPhoto] = useState("");
  const handlePhotoChange = (event) =>
    setPhoto(event.target.value);
  
  const [ingredients, setIngredients] = useState("");
  const handleIngredientsChange = (event) =>
    setIngredients(event.target.value);
  
  const [preparation, setPreparation] = useState("");
  const handlePreparationChange = (event) =>
    setPreparation(event.target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddRecipe({name: name, cuisine: cuisine, photo: photo, ingredients: ingredients, preparation: preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleSubmit} className="recipe-create">
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" placeholder="Name" onChange={handleNameChange} value={name}/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" placeholder="Cuisine" onChange={handleCuisineChange} value={cuisine}/>
            </td>
            <td>
              <input id="photo" name="photo" type="url" placeholder="Phot URL" onChange={handlePhotoChange} value={photo}/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" onChange={handleIngredientsChange} value={ingredients}/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" placeholder="Preparation" onChange={handlePreparationChange} value={preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
