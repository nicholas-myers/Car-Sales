import React from 'react'; 
import { connect } from "react-redux";
import { addFeature } from "../actions/carActions"

const AdditionalFeature = props => {
console.log(props)
  // when I click the add button iterate and find the id of the feature
  // add the feature to the car

  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button" 
      onClick={() => {addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  // console.log({ state })

  return { state }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
