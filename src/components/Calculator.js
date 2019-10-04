import React, { useState, useEffect } from 'react';
import StrengthSlider from './StrengthSlider.js'
import ServingsSlider from './ServingsSlider.js'
import WeightSlider from './WeightSlider.js'
import Results from './Results.js'
import firebase from '.././util/firebase';
import {
  getRecipeTotal,
  getRecipePerServing,
  getLevel,
} from '.././util/helpers';

function useDosageInfo(dosageLevel) {
  const [dosageInfo, setDosageInfo] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('effects')
      .doc(dosageLevel)
      .onSnapshot((doc) => {
        const dosageInfo = {
          id: dosageLevel,
          ...doc.data()
        };
        setDosageInfo(dosageInfo);
      });
  }, [dosageLevel]);

  return dosageInfo;
}

function Calculator() {
  const [state, setState] = useState({
    strength: 15,
    weight: 7,
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
  const dosageInfo = useDosageInfo(getLevel(recipePerServing));

  return (
    <div
      className='calculatorContainer'
    >
      <div
        className='contentWrapper'
        style={{
          border: `6px solid ${dosageInfo.color}`,
        }}
      >
        <Results
          dosageInfo={dosageInfo}
          recipeTotal={recipeTotal}
          recipePerServing={recipePerServing}
        />
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
    </div>
  );

}

export default Calculator;
