import { Suspense, lazy, FC, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Components/Partials/Loader";
import PageTitle from "../Components/ui/PageTitle";
import routes from "../route/AppRoutes";

// Lazy loading for Page404
const Page404 = lazy(() => import("../pages/Page404"));


// Interface for route structure
interface RouteConfig {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>; // Define the type for lazy-loaded components
}


const PageContent: FC = () => {
  const { pathname } = useLocation();
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return (
    <div
      className="p-4 bg-gray-100 "
      ref={mainContentRef}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
        {routes.map((route: RouteConfig, key) => (
            <Route
              key={key}
              path={route.path}
              element={
                <>
                  <PageTitle title={route.title} />
                  <route.component />
                </>
              }
            />
          ))}
          {/* Redirecting unknown URLs to the 404 page */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default PageContent;
