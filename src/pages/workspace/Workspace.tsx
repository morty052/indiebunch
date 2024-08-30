import WorkspaceRoutes from "@/routes/WorkspaceRoutes";
import WorkSpaceLayout from "./components/WorkSpaceLayout";

const Workspace = () => {
  return (
    <WorkSpaceLayout>
      <WorkspaceRoutes />
    </WorkSpaceLayout>
  );
};

export default Workspace;
