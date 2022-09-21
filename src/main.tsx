import * as ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import BaseRoute from './routes';
import 'reset-css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <RecoilRoot>
    <BaseRoute />
  </RecoilRoot>,
);
