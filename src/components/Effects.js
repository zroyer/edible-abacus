import React from 'react';

const Effects = (props) =>  {
  const { dosageInfo } = props;
  return (
    <div className='effectsContainer'>
      <div className='expectationsContainer'>
        <div className='label'>What To Expect</div>
        <ul
        >
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
        <div className='label'>Who's It For?</div>
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
