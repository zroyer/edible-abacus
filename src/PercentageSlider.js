import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const PercentageSlider = (props) => {
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={100}
          onChange={props.onChange}
          value={props.value}
          step={0.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          formatter={value => `${value} %`}
          parser={value => value.replace(' %', '')}
          style={{ marginLeft: 16 }}
          step={0.01}
          value={props.value}
          onChange={props.onChange}
        />
      </Col>
    </Row>
  );
}

export default PercentageSlider;
