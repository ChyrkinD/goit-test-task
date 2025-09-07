import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./App.css";

const LazyHeroPage = lazy(() => import("../../pages/Hero/Hero"));
const LazyCatalogPage = lazy(() => import("../../pages/Catalog/Catalog"));
const LazyCatalogItem = lazy(() =>
  import("../../pages/CatalogItem/CatalogItem")
);
const LazyCatalogFeatures = lazy(() =>
  import("../CatalogFeatures/CatalogFeatures")
);
const LazyCatalogReviews = lazy(() =>
  import("../CatalogReviews/CatalogReviews")
);
const LazyNotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHeroPage />} />
          <Route path="/catalog" element={<LazyCatalogPage />} />
          <Route path="/catalog/:id" element={<LazyCatalogItem />}>
            <Route path="features" element={<LazyCatalogFeatures />} />
            <Route path="reviews" element={<LazyCatalogReviews />} />
          </Route>
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
