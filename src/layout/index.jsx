import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Loading from 'components/Loading';
import { PageView, PageViewMain } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';

export default function SharedLayout() {
  return (
    <PageView>
      <Header />

      <PageViewMain>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </PageViewMain>


      <Toaster />
    </PageView>
  );
}