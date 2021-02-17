import React from 'react';
import ReactDOM from 'react-dom';

import { Global, css } from '@emotion/react';

// import App from './App';
import App from './AppWithStyledComponents';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
