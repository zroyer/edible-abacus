import React from 'react';
import { Divider } from 'antd';

const Effects = (props) =>  {
  const { dosageInfo } = props;
  return (
    <div className='effectsContainer'>
      <div className='expectationsContainer'>
        <Divider orientation='left'>
          <span className='label'>What To Expect</span>
        </Divider>
        <ul>
          {dosageInfo.expectations && dosageInfo.expectations.map((expectation) => {
            return (
              <li
                className='expectation fadeIn'
                key={`${expectation.slice(0, 5)}-${dosageInfo.id}`}
              >
                {expectation}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='segmentsContainer'>
        <Divider orientation='left'>
          <span className='label'>Who's It For?</span>
        </Divider>
        <ul>
          {dosageInfo.segments && dosageInfo.segments.map((segment) => {
            return (
              <li
                className='segment fadeIn'
                key={`${segment.slice(0, 5)}-${dosageInfo.id}`}
              >
                {segment}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Effects;
