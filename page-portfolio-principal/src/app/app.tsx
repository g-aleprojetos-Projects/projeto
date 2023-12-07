import * as React from 'react';
import {BackgroundProvide} from 'context/backgroud';
import {WebRotas} from 'webRotas';
import {BrowserRouter} from 'react-router-dom';
import {Layout} from 'components/layout';

export const App = () => {
  return (
    <BackgroundProvide>
      <BrowserRouter>
        <Layout>
          <WebRotas />
        </Layout>
      </BrowserRouter>
    </BackgroundProvide>
  );
};
