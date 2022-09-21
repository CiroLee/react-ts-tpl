import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import BaseRoute from './routes';
import 'reset-css';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BaseRoute />
    </RecoilRoot>
  </React.StrictMode>,
);
