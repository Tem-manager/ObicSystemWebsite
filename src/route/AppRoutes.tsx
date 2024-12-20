import { lazy, } from "react";
// import AppLayout from "../Layout/AppLayout";

// Lazy loading for components
const SharedRoutes = lazy(() => import("./SharedRoutes"));
const ChatLayout = lazy(() => import("../features/chat/Layout/ChatLayout"));
// const AppLayout = lazy(() => import("../Layout/AppLayout"));
const ServicesLayout = lazy(() =>
  import("../features/services/Layout/ServicesLayout")
);

const MinistriesRoutes = lazy(() =>
  import("../features/ministries/route/MinistriesRoutes")
);
const EnjoyRoutes = lazy(() => import("../features/enjoy/route/EnjoyRoutes"));
const WalletRoutes = lazy(() => import("../features/wallet/route/WalletRoutes"));

// Interface for route structure
interface RouteConfig {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}


// Routes configuration
const routes: RouteConfig[] = [
  {
    path: "/",
    title: "login",
    component: SharedRoutes,
  },
  {
    path: "/*",
    title: "",
    component: SharedRoutes,
  },
  {
    path: "/chat/*",
    title: "",
    component: ChatLayout,
  },
  {
    path: "/services/*",
    title: "",
    component: ServicesLayout,
  },
  {
    path: "/ministries/*",
    title: "",
    component: MinistriesRoutes,
  },
  {
    path: "/enjoy/*",
    title: "",
    component: EnjoyRoutes,
  },
  {
    path: "/wallet/*",
    title: "",
    component: WalletRoutes,
  },
  
];

export default routes;