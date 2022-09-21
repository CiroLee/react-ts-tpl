import { lazy } from 'react';
import { RouteConfigProps } from '@/types/router';
const Home = lazy(() => import('@/pages/home'));

const routesConfig: RouteConfigProps[] = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
];

export default routesConfig;
