import React from 'react';

const Effects = (props) =>  {
  const { dosageInfo } = props;

  return (
    <div>
      <div>
        <h3>What To Expect</h3>
        {dosageInfo.expectations && dosageInfo.expectations.map((expectation) => {
          return (
            <div
              key={`${expectation.slice(0, 5)}-${dosageInfo.id}`}
            >
              {expectation}
            </div>
          )
        })}
      </div>
      <div>
        <h3>Who's It For?</h3>
        {dosageInfo.segments && dosageInfo.segments.map((segment) => {
          return (
            <div
              key={`${segment.slice(0, 5)}-${dosageInfo.id}`}
            >
              {segment}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Effects;
