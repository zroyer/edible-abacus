import React, { useState } from 'react';
import StrengthSlider from './StrengthSlider.js'
import ServingsSlider from './ServingsSlider.js'
import WeightSlider from './WeightSlider.js'
import Results from './Results.js'
import {
  getRecipeTotal,
  getRecipePerServing,
} from '.././util/helpers';

function Calculator() {
  const [state, setState] = useState({
    strength: 12,
    weight: 14,
    numServings: 48,
  });

  const recipeTotal = getRecipeTotal({
    weight: state.weight,
    strength: state.strength,
  });
  const recipePerServing =  getRecipePerServing({
    weight: state.weight,
    strength: state.strength,
    numServings: state.numServings,
  });

  return (
    <div className='calculatorContainer'>
      <div className='sliderWrapper'>
        <StrengthSlider
          value={state.strength}
          onChange={(strength) => setState(state => ({ ...state, strength }))}
        />
        <WeightSlider
          value={state.weight}
          onChange={(weight) => setState(state => ({ ...state, weight }))}
        />
        <ServingsSlider
          value={state.numServings}
          onChange={(numServings) => setState(state => ({ ...state, numServings }))}
        />
      </div>
      <Results
        recipeTotal={recipeTotal}
        recipePerServing={recipePerServing}
      />
    </div>
  );

}

export default Calculator;
