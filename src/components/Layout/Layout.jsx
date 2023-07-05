import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Header />
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
