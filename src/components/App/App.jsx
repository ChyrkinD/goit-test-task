import { Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const LazyHeroPage = lazy(() => import('../../pages/Hero/Hero'));
const LazyCatalogPage = lazy(() => import('../../pages/Catalog/Catalog'));
const LazyCatalogItemPage = lazy(() =>
  import('../../pages/CatalogItem/CatalogItem')
);
const LazyFeatures = lazy(() => import('../Features/Features'));
const LazyReviews = lazy(() => import('../Reviews/Reviews'));
const LazyNotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <div className="font-inter text-main text-base min-h-screen flex flex-col">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHeroPage />} />
          <Route path="/catalog" element={<LazyCatalogPage />} />
          <Route path="/catalog/:camperId" element={<LazyCatalogItemPage />}>
            <Route path="features" element={<LazyFeatures />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
