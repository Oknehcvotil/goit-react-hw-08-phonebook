import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
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
