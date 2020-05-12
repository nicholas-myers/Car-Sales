import React from 'react'; 
import { addFeature } from "../actions/carActions"

const AdditionalFeature = props => {
// console.log(props)
  // when I click the add button iterate and find the id of the feature
  // add the feature to the car

  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button" 
      onClick={(event) => {
        event.preventDefault()
        addFeature(props.feature.id)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
