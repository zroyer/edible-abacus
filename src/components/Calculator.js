import React, { useState } from 'react';
import {
  Form,
} from 'antd';
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
    <>
      <Form>
        <Form.Item label='💪Strength'>
          <StrengthSlider
            value={state.strength}
            onChange={(strength) => setState(state => ({ ...state, strength }))}
          />
        </Form.Item>
        <Form.Item label='🌳Weight'>
          <WeightSlider
            value={state.weight}
            onChange={(weight) => setState(state => ({ ...state, weight }))}
          />
        </Form.Item>
        <Form.Item label='🍫Servings'>
          <ServingsSlider
            value={state.numServings}
            onChange={(numServings) => setState(state => ({ ...state, numServings }))}
          />
        </Form.Item>
      </Form>
      <Results
        recipeTotal={recipeTotal}
        recipePerServing={recipePerServing}
      />
    </>
  );

}

export default Calculator;
