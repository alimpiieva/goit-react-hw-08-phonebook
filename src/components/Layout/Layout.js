import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import CustomSpinner  from './Spinner';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }} className="container">
    <AppBar />
    <Suspense fallback={<CustomSpinner />}>
      <Outlet />
    </Suspense>
    <Toaster position="top-right" reverseOrder={false} />
  </div>
  );
};
