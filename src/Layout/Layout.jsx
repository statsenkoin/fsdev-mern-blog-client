import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loading } from 'components';
import { PageWrap, ContentWrap } from './Layout.styled';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <PageWrap>
      <Header />
      <ContentWrap>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ContentWrap>
      <Footer />
    </PageWrap>
  );
};
