/* eslint-disable react/prop-types */

import React from 'react';

function Button (props) {
  return (
    <div>
      <a href={props.url} className='btn'>
        Buy Tickets
      </a>
    </div>
  );
}

export default Button;
