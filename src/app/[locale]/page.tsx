import Hero from '@/components/layout/Hero/hero';
import { Suspense, lazy } from 'react';
// import HomeMenu from '@/components/layout/HomeMenu/home-menu';
const HomeMenu = lazy(() => import('@/components/layout/HomeMenu/home-menu'));

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <HomeMenu />
      </Suspense>
    </>
  );
}
