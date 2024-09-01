import Dashboard from "@/pages/dashboard/Dashboard";
import Discover from "@/pages/discover/Discover";
import Profile from "@/pages/profile/Profile";
import { Routes, Route } from "react-router-dom";

const WorkspaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default WorkspaceRoutes;
