import Dashboard from "@/pages/dashboard/Dashboard";
import Discover from "@/pages/discover/Discover";
import Profile from "@/pages/profile/Profile";
import Projects from "@/pages/projects/Projects";
import Tavern from "@/pages/tavern/Tavern";
import { Routes, Route } from "react-router-dom";

const WorkspaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tavern" element={<Tavern />} />
    </Routes>
  );
};

export default WorkspaceRoutes;
