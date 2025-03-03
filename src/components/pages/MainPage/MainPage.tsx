import React from 'react';
import { Outlet } from 'react-router';
import MainNavigation from '@/components/organisms/MainNavigation';
import './MainPageStyles.scss';

const MainLayout: React.FC = () => {
  return (
    <div className="main-page">
      <MainNavigation />
      <main className="main-page__main-section">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
