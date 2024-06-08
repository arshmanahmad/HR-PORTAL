import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layout";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Changelog from './Changelog'
import Banking from "./Banking";
import CRM from './CRM'
import Project from './Project'
import MonCompte from './mon-compte'
const DashboardRoutes = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/project" element={<Project />} />
          <Route path="/monCompte" element={<MonCompte />} />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default DashboardRoutes;
