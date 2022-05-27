import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import BaseRoute from './routes';
import 'reset-css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BaseRoute />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
