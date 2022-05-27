import { lazy } from 'react';
import { RouteConfigProps } from '@/types/router';
const Home = lazy(() => import('@/pages/home'));
/** 路由数组(不要删除这行注释)*/
const routesConfig: RouteConfigProps[] = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
];

export default routesConfig;
