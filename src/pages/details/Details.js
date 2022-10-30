import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'

const Details = () => {

  const {state} = useLocation()
  return (
    <div>
      <Navbar />
      <div className="details">
        <img src={state.image} alt="" />
        <ol className="ing">
          <h4>INGREDİENTS</h4>
          {state.ingredientLines.map((item) => {
            return <li>{item} </li>;
          })}
        </ol>

        <div className="nuts">
          <h4>NUTRIENTS</h4>
          <li>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </li>
          <li>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </li>
          <li>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </li>
          <li>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </li>
          <li>Total weight :{Math.round(state.totalWeight)}g</li>
          <li>Calories: {Math.round(state.calories)}</li>
          {state.digest.slice(0, 4).map((item, index) => (
            <li key={index}>
              {item.label} : {Math.round(item.total)}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details