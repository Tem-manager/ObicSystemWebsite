//one page content


import { FC, useEffect, useRef, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "../../../Components/ui/PageTitle";
import routes from "../route/ChatRoutes";

// Lazy loading for Page404
const Page404 = lazy(() => import("../../../pages/Page404"));



// Interface for route structure
interface RouteConfig {
  path: string;
  title: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
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
       <div className="overflow-auto h-[calc(100vh-18vh)] "       
       ref={mainContentRef}
        >
      <div className="flex">

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
    </div>
    </div>
  );
};

export default PageContent;
