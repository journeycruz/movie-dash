import React from 'react';

function ProgressBar ({ bgColor, completed }) {
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor,
    textAlign: 'right',
    borderRadius: 2,
    transition: 'width 1s ease-in-out'
  };

  return (
    <div className='pb-unfilled'>
      <div style={fillerStyles}>
      </div>
    </div>
  );
}

export default ProgressBar;
