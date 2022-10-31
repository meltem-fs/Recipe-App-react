import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import RecipeCard from "./RecipeCard";


const Home = () => {
  const saveRecipes = () => {
    return JSON.parse(localStorage.getItem("recipe")) || [];
  };

  const [recipe, setRecipe] = useState(saveRecipes());
   useEffect(() => {
     localStorage.setItem("recipe", JSON.stringify(recipe));
   }, [recipe]);

   

    const [values, setValues] = useState({
      foodName: "",
      selectType: "",
    });

    // const apiId = "5972fd79";
    // const apiKeyy = "d32a3880a1f03cf9ed0b00c612bce233";
    // const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${values.foodName}&app_id=${apiId}&app_key=${apiKeyy}&mealType=${values.selectType}`;

     const apiId = "1b28d0c7";
     const apiKeyy = "9dd2626769af8779895e42901917977f	";
     const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${values.foodName}&app_id=${apiId}&app_key=${apiKeyy}&mealType=${values.selectType}`;

     const getApi = async()=>{
      try {
        const { data } = await axios(url);
        console.log(data.hits);
        setRecipe(data.hits)
      } catch (error) {
        console.log(error)
      }
     }

     const handleSubmit = (e) =>{
      e.preventDefault();
      getApi();
     }

     
    



     const handleChange = (e)=>{
      setValues({...values,[e.target.id] : e.target.value})
     }

  
  return (
    <>
      <Navbar />
      <div className="home">
        <form action="" onSubmit={handleSubmit}>
          <div className="mealinput">
            <input
              placeholder="enter a meal name..."
              value={values.foodName}
              id="foodName"
              type="text"
              onChange={handleChange}
              required
            />
          </div>
          <div className="typeinput">
            <select onChange={handleChange} id="selectType">
              <option value="breakfast" disabled selected>
                Breakfast
              </option>
              <option value="breakfast">
                Breakfast
              </option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="snack">Snack</option>
              <option value="teatime">Teatime</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
        <div className="cards">
          {recipe.map((recipe, index) => {
            return <RecipeCard index={index} recipe={recipe} />;
          })}
        </div>
      
    </>
  );
  }
  
;

export default Home;
