import React from 'react';
import { Slider, InputNumber } from 'antd';

const ServingsSlider = (props) => {
  return (
    <div className='sliderColumn'>
      <span
        className='label'
        role='img'
        aria-label='weight'
      >
        Servings 🍫
      </span>
      <div className='sliderRow'>
        <Slider
          min={1}
          max={144}
          onChange={props.onChange}
          value={props.value}
          step={1}
        />
        <InputNumber
          style={{ marginLeft: 16 }}
          step={1}
          value={props.value}
          onChange={props.onChange}
          pattern='[0-9]*'
        />
      </div>
    </div>
  );
}

export default ServingsSlider;
