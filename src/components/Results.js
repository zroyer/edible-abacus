import React from 'react';
import Effects from './Effects.js'
import KawaiiAnimation from './KawaiiAnimation.js'

import {
  Statistic,
} from 'antd';

const Results = (props) =>  {
  return (
    <>
      <Effects
        dosageInfo={props.dosageInfo}
      />
      <div
        className='statisticsRow'
        type='flex'
        justify='center'
      >
        <Statistic
          title='THC/recipe'
          className='statistic'
          value={props.recipeTotal}
          precision={2}
          suffix='mg'
        />
        <KawaiiAnimation
          mood={props.dosageInfo.mood}
        />
        <Statistic
          title='THC/serving'
          className='statistic'
          value={props.recipePerServing}
          precision={2}
          suffix='mg'
        />
      </div>
    </>
  );
}

export default Results;
