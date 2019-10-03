import React from 'react';
import { Slider, InputNumber } from 'antd';

const StrengthSlider = (props) => {
  return (
    <div className='sliderColumn'>
      <div className='sliderLabelRow'>
        <span className='label'>
          Strength
        </span>
        <span
          className='labelIcon'
          role='img'
          aria-label='strength'
        >
          💪
        </span>
      </div>
      <div className='sliderRow'>
        <Slider
          min={0}
          max={30}
          onChange={props.onChange}
          value={props.value}
          step={0.01}
        />
        <InputNumber
          formatter={value => `${value} %`}
          parser={value => value.replace(' %', '')}
          style={{ marginLeft: 16 }}
          step={0.01}
          value={props.value}
          onChange={props.onChange}
          pattern='[0-9]*'
        />
      </div>
    </div>
  );
}

export default StrengthSlider;
