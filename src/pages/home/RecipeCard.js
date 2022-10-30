import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {

  const navigate = useNavigate()
  return (
    <div className='recipecard'>
        <img src={recipe?.recipe.image} alt="" />
        <h5>{recipe?.recipe.label} </h5>
        <button onClick={()=> navigate("/details",{state:recipe.recipe})} >Details</button>
    </div>
  )
}

export default RecipeCard