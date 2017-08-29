import React from 'react';
import { rehydrate, css } from 'glamor';
import glamorous from 'glamorous';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids);
}

export default () => {
  css.global('html, body', {
    padding: '0',
    margin: 0,
    background: '#F4F4F8',
    minHeight: '100%',
    fontFamily: 'sans-serif',
    fontSize: '24px',
  });

  return <div>Justin Dopierala</div>;
};
