import React from 'react'
import { useNavigate } from 'react-router-dom'
import RecipeStyled from './RecipeCard.styled'

const RecipeCard = ({recipe}) => {

  const navigate = useNavigate()
  return (
    <RecipeStyled className='recipecard'>
        <img src={recipe?.recipe.image} alt="" />
        <h5>{recipe?.recipe.label} </h5>
        <button onClick={()=> navigate("/details",{state:recipe.recipe})} >Details</button>
    </RecipeStyled>
  )
}

export default RecipeCard