import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const PercentageSlider = (props) => {
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={100}
          onChange={props.onChange}
          value={props.value}
          step={1}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          style={{ marginLeft: 16 }}
          step={1}
          value={props.value}
          onChange={props.onChange}
        />
      </Col>
    </Row>
  );
}

export default PercentageSlider;
