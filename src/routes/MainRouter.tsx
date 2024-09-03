import Layout from "@/components/ui/layout";
import CreateService from "@/pages/create-service/CreateService";
import LandingPage from "@/pages/landingpage/LandingPage";
import Workspace from "@/pages/workspace/Workspace";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
  },
  {
    path: "/workspace/*",
    element: <Workspace />,
  },
  {
    path: "/create/service/*",
    element: (
      <Layout>
        <CreateService />
      </Layout>
    ),
  },
  {
    path: "/create/project/*",
    element: (
      <Layout>
        <CreateService />
      </Layout>
    ),
  },
]);

function MainRouter() {
  return <RouterProvider router={router} />;
}

export default MainRouter;
