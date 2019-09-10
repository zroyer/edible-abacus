import React, { useState } from 'react';
import {
  Form,
  Row,
  Statistic,
} from 'antd';
import PercentageSlider from './PercentageSlider.js'
import IntegerSlider from './IntegerSlider.js'
import WeightSlider from './WeightSlider.js'

function Calculator() {
  const [state, setState] = useState({
    strength: 15,
    weight: 28.15,
    serving: 48,
  });

  const formItemLayout = {
    labelCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 8, offset: 0 },
    },
    wrapperCol: {
      xs: { span: 20, offset: 2 },
      sm: { span: 16, offset: 0 },
    },
  };

  const recipeTotal = 10 * state.weight * state.strength;
  const recipePerServing = 10 * state.weight * state.strength / state.serving;

  return (
    <>
      <Form {...formItemLayout}>
        <Form.Item label='💪Strength'>
          <PercentageSlider
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
          <IntegerSlider
            value={state.serving}
            onChange={(serving) => setState(state => ({ ...state, serving }))}
          />
        </Form.Item>
      </Form>
      <Row
        className='statisticsRow'
        type='flex'
        justify='center'
      >
        <Statistic
          title='Total Recipe THC (mg)'
          className='statistic'
          value={recipeTotal}
          precision={2}
        />
        <Statistic
          title='THC/serving (mg)'
          className='statistic'
          value={recipePerServing}
          precision={2} />
      </Row>
    </>
  );

}

export default Calculator;
