import React, { useState } from 'react';
import {
  Form,
  Row,
  Col,
  Statistic,
} from 'antd';
import PercentageSlider from './PercentageSlider.js'
import IntegerSlider from './IntegerSlider.js'
import WeightSlider from './WeightSlider.js'

function Calculator() {
  const [state, setState] = useState({
    strength: 15,
    weight: 28.15,
    serving: 24,
  });

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const recipeTotal = 10 * state.weight * state.strength;
  const recipePerServing = 10 * state.weight * state.strength / state.serving;

  return (
    <>
      <Form {...formItemLayout}>
        <Form.Item label='Strength (%)'>
          <PercentageSlider
            value={state.strength}
            onChange={(strength) => setState(state => ({ ...state, strength }))}
          />
        </Form.Item>
        <Form.Item label='Weight (g)'>
          <WeightSlider
            value={state.weight}
            onChange={(weight) => setState(state => ({ ...state, weight }))}
          />
        </Form.Item>
        <Form.Item label='Servings'>
          <IntegerSlider
            value={state.serving}
            onChange={(serving) => setState(state => ({ ...state, serving }))}
          />
        </Form.Item>
      </Form>
      <Row type='flex' justify='center'>
        <Col
          span={6}
          className='statistic'
        >
          <Statistic title='Total Recipe THC (mg)'
            value={recipeTotal}
            precision={2}
          />
        </Col>
        <Col
          span={6}
          className='statistic'
        >
          <Statistic
            title='THC/serving (mg)'
            value={recipePerServing}
            precision={2} />
        </Col>
      </Row>
    </>
  );

}

export default Calculator;
