import { createBrowserRouter } from "react-router-dom/";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDetailPage } from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default router;
