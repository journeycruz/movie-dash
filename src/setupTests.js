import '@testing-library/jest-dom';
import { unmountComponentAtNode } from 'react-dom';
import { beforeEach, afterEach } from 'react';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
