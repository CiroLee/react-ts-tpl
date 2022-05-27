import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routesConfig from './config';
const BaseRoute = () => {
  const routes = routesConfig.map(item => {
    return <Route path={item.path} element={item.element} key={item.name} />;
  });
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>{routes}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default BaseRoute;