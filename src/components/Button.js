/* eslint-disable react/prop-types */

import React from 'react';

function Button ({ url }) {
  return (
    <div>
      <a href={url} className='btn'>
        Buy Tickets
      </a>
    </div>
  );
}

export default Button;
