import React from 'react';
import { Slider, InputNumber } from 'antd';

const WeightSlider = (props) =>  {
  return (
    <div className='sliderColumn'>
      <div className='sliderLabelRow'>
        <span className='label'>
          Weight
        </span>
        <span
          className='labelIcon'
          role='img'
          aria-label='weight'
        >
          🌳
        </span>
      </div>
      <div className='sliderRow'>
        <Slider
          min={0}
          max={56.69}
          onChange={props.onChange}
          value={props.value}
          step={.01}
        />
        <InputNumber
          formatter={value => `${value} g`}
          parser={value => value.replace(' g', '')}
          style={{ marginLeft: 16 }}
          step={.01}
          value={props.value}
          onChange={props.onChange}
          pattern='[0-9]*'
        />
      </div>
    </div>
  );
}

export default WeightSlider;
