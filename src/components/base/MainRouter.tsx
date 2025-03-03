import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import MainPage from '@/components/pages/MainPage';
import { COCKTAILS_KEYS } from '@/consts';
import DrinkCard from '@/components/templates/DrinkCard';
import NotFoundPage from '@/components/pages/NotFoundPage';

const MainRouter: React.FC = () => {
  const createRoutes = (keys: string[]): React.ReactNode[] => {
    return keys.map(key => (
      <Route key={key} path={`/${key}`} element={<DrinkCard drinkId={key} />} />
    ));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/" element={<DrinkCard drinkId="margarita" />} />
          {createRoutes(COCKTAILS_KEYS)}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
