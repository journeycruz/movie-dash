/* eslint-disable react/prop-types */

import React from 'react';

function ProgressBar ({ bgColor, completed }) {
  const containerStyles = {
    height: 6,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 2
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor,
    textAlign: 'right',
    borderRadius: 2,
    transition: 'width 1s ease-in-out'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
}

export default ProgressBar;
