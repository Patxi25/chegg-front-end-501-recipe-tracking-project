import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const handleDeleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  };
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  
  return (
    <div className="App">
      <header>
        <h1 style={{ fontFamily: "'Playfair Display SC'", textAlign: 'center', fontSize: '64px' }}>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} handleDelete={handleDeleteRecipe}/>
      <RecipeCreate handleAddRecipe={handleAddRecipe}/>
    </div>
  );
}

export default App;
