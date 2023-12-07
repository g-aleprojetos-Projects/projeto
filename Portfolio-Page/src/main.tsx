import React from 'react';
import ReactDOM from 'react-dom/client';
import {StyleSheetManager} from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import './index.css';
import {App} from './app';

export const shouldForwardProp = (prop: string) => isPropValid(prop);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
);
