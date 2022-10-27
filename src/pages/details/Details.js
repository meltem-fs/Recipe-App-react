import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import DetailStyle from './Details.style';

const Details = () => {

  const {state} = useLocation();
  const {
    label,
    ingredientLines,
    image
  } = state;

  console.log(ingredientLines);
  return (
    <div>
      <Navbar />
      <DetailStyle>
        <ol className="ul_style">
          {ingredientLines.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>

        <div className='tarik'>
          <h1>{label}</h1>
          <div className="img_style">
            <img src={image} alt="" />
          </div>
        </div>

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
          <li>{state.totalWeight}</li>
          <li>Calories: {Math.round(state.calories)}</li>
          {state.digest.slice(0, 4).map((item, index) => (
            <li key={index}>
              {item.label} : {Math.round(item.total)}
            </li>
          ))}
        </div>
      </DetailStyle>
    </div>
  );
}

export default Details