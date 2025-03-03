import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/normalize.scss';
import '@/styles/global.scss';
import OfflineWarning from '@/components/molecules/OffllineWarning';

const MainRouter = lazy(() => import('./MainRouter'));

const queryClient = new QueryClient();

const Root: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '24px',
          }}
        >
          Loading...
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <MainRouter />
        <OfflineWarning />
      </QueryClientProvider>
    </Suspense>
  );
};

export default Root;
