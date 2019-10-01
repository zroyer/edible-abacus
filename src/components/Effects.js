import React from 'react';

const Effects = (props) =>  {
  const { dosageInfo } = props;

  return (
    <div className='effectsContainer'>
      <div className='expectationsContainer'>
        <div className='label'>What To Expect</div>
        {dosageInfo.expectations && dosageInfo.expectations.map((expectation) => {
          return (
            <div
              className='expectation'
              key={`${expectation.slice(0, 5)}-${dosageInfo.id}`}
            >
              ➭ {expectation}
            </div>
          )
        })}
      </div>
      <div className='segmentsContainer'>
        <div className='label'>Who's It For?</div>
        {dosageInfo.segments && dosageInfo.segments.map((segment) => {
          return (
            <div
              className='segment'
              key={`${segment.slice(0, 5)}-${dosageInfo.id}`}
            >
              ➭ {segment}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Effects;
