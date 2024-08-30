import LandingPage from "@/pages/landingpage/LandingPage";
import Workspace from "@/pages/workspace/Workspace";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/workspace/*",
    element: <Workspace />,
  },
]);

function MainRouter() {
  return <RouterProvider router={router} />;
}

export default MainRouter;
