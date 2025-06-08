import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Reviews from "./components/Reviews/Reviews";
import Features from "./components/Features/Features";

const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Loader = lazy(() => import("./components/Loader/Loader"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="/catalog/:truckId" element={<DetailsPage />}>
            <Route index element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
