import React from 'react';
import { carState } from "./reducers/carReducer"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
// console.log(carState)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={carState.car} />
        <AddedFeatures car={carState.car} />
      </div>
      <div className="box">
        <AdditionalFeatures 
        additionalFeatures={carState.additionalFeatures} />
        <Total 
        car={carState.car} 
        additionalPrice={carState.additionalPrice} />
      </div>
    </div>
  );
};



export default App;
