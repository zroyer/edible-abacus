import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const WeightSlider = (props) =>  {
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={57}
          onChange={props.onChange}
          value={props.value}
          step={.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          formatter={value => `${value} g`}
          parser={value => value.replace(' g', '')}
          style={{ marginLeft: 16 }}
          step={.01}
          value={props.value}
          onChange={props.onChange}
        />
      </Col>
    </Row>
  );
}

export default WeightSlider;
