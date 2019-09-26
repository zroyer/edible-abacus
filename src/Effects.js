import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const DOSAGE_LEVEL_LIGHT = 'light';
const DOSAGE_LEVEL_MILD = 'mild';
const DOSAGE_LEVEL_MEDIUM = 'medium';
const DOSAGE_LEVEL_STRONG = 'strong';
const DOSAGE_LEVEL_HEAVY = 'heavy';

function getLevel(perServing) {
  if (perServing < 2.5) {
    return DOSAGE_LEVEL_LIGHT;
  }
  else if (perServing < 15) {
    return DOSAGE_LEVEL_MILD;
  }
  else if (perServing < 30) {
    return DOSAGE_LEVEL_MEDIUM;
  }
  else if (perServing < 50) {
    return DOSAGE_LEVEL_STRONG;
  }
  else {
    return DOSAGE_LEVEL_HEAVY;
  }
}

function useDosageInfo(dosageLevel) {
  const [dosageInfo, setDosageInfo] = useState([]);
  console.log(dosageLevel);
  useEffect(() => {
    firebase
      .firestore()
      .collection('effects')
      .doc(dosageLevel)
      .onSnapshot((doc) => {
        const dosageInfo = doc.data();
        setDosageInfo(dosageInfo);
      });
  }, [dosageLevel]);

  return dosageInfo;
}

const Effects = (props) =>  {
  const dosageInfo = useDosageInfo(getLevel(props.perServing));
  return (
    <div>
      <div>
        <h3>What To Expect</h3>
        {dosageInfo.expectations && dosageInfo.expectations.map((expectation) => {
          return (
            <div>{expectation}</div>
          )
        })}
      </div>
      <div>
        <h3>Who's It For?</h3>
        {dosageInfo.segments && dosageInfo.segments.map((segment) => {
          return (
            <div>{segment}</div>
          )
        })}
      </div>
    </div>
  );
}

export default Effects;
