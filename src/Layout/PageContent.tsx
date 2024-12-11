// import { Suspense, lazy, FC, useEffect, useRef } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Loader from "../Components/Partials/Loader";
// import PageTitle from "../Components/ui/PageTitle";
// import routes from "../route/AppRoutes";

// // Lazy loading for Page404
// const Page404 = lazy(() => import("../pages/Page404"));


// // Interface for route structure
// interface RouteConfig {
//   path: string;
//   title: string;
//   component: React.LazyExoticComponent<() => JSX.Element>; // Define the type for lazy-loaded components
// }


// const PageContent: FC = () => {
//   const { pathname } = useLocation();
//   const mainContentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (mainContentRef.current) {
//       mainContentRef.current.scroll({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   }, [pathname]);

//   return (
//     <div
//       ref={mainContentRef}
//     >
//       <Suspense fallback={<Loader />}>
//         <Routes>
//         {routes.map((route: RouteConfig, key) => (
//             <Route
//               key={key}
//               path={route.path}
//               element={
//                 <>
//                   <PageTitle title={route.title} />
//                   <route.component />
//                 </>
//               }
//             />
//           ))}
//           {/* Redirecting unknown URLs to the 404 page */}
//           <Route path="*" element={<Page404 />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default PageContent;



//one pagecontent


import { FC, useEffect, useRef, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "../Components/ui/PageTitle";
import Loader from "../Components/Partials/Loader";

// Lazy loading for 404 Page
const Page404 = lazy(() => import("../pages/Page404"));

interface PageContentProps {
  routes: {
    path: string;
    title: string;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
  }[];
  scrollBehavior?: "smooth" | "auto"; // Allow custom scroll behavior
  customClassName?: string; // Allow passing custom class names for styling
}

const PageContent: FC<PageContentProps> = ({
  routes,
  scrollBehavior = "smooth",
  customClassName = " h-[calc(100vh-18vh)]",
}) => {
  const { pathname } = useLocation();
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: scrollBehavior,
      });
    }
  }, [pathname, scrollBehavior]);

  return (
    <div ref={mainContentRef} className={customClassName}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, key) => (
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default PageContent;
