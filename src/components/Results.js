import React, { useState, useEffect } from 'react';
import Effects from './Effects.js'
import firebase from '.././util/firebase';
import { getLevel } from '.././util/helpers';
import {
  Row,
  Statistic,
} from 'antd';

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

const Results = (props) =>  {
  const dosageInfo = useDosageInfo(getLevel(props.recipePerServing));
  return (
    <div
      style={{
        border: `2px solid ${dosageInfo.color}`,
      }}
    >
      <Row
        className='statisticsRow'
        type='flex'
        justify='center'
      >
        <Statistic
          title='Total Recipe THC (mg)'
          className='statistic'
          value={props.recipeTotal}
          precision={2}
        />
        <Statistic
          title='THC/serving (mg)'
          className='statistic'
          value={props.recipePerServing}
          precision={2} />
      </Row>
      <Effects
        dosageInfo={dosageInfo}
      />
    </div>
  );
}

export default Results;
