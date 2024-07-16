import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layout";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Changelog from "./Changelog";
import Banking from "./Banking";
import CRM from "./CRM";
import Project from "./Project";
import MonCompte from "./mon-compte";
import ChuCody from "./ChuCody";
import Staff from "./Staff";
import Feedback from "./Feedback";
import Evaluation from "./Evaluations";
import LeaveManagement from "./LeaveManagement";
import SurveyFeedback from "./SurveyFeedback";
import Reports from "./Reports";
import Jobs from "./Jobs";
import Teams from "./Teams";
import Department from "./Department";
import Services from "./Services";
import Units from "./Units";
import Job from "./Job";
import Functions from "./Functions";
import Grades from "./Grades";
import Roles from "./Roles";
import Privileges from "./Privileges";
import Employees from "./Employees";
import EmployeePrivileges from "./EmployeePrivileges";
import DoctorDentistSurvey from "./DoctorDentistSurvey";
import NursingMidwiferySurvey from "./NursingMidwiferySurvey";
import NatureOfContract from "./NatureOfContract";
import HRDashboard from "./HRDashboard";
import AccessLog from "./AccessLog";
import WorkSchedule from "./WorkSchedule";
import JobsByDepartment from "./JobsByDepartment";
import RequestsLists from "./RequestsLists";
import JobCoding from "./JobCoding";
const DashboardRoutes = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/changeLog" element={<Changelog />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/job" element={<Job />} />
          <Route path="/accessLogs" element={<AccessLog />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/unit" element={<Units />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/hrDashboard" element={<HRDashboard />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/privileges" element={<Privileges />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/project" element={<Project />} />
          <Route path="/department" element={<Department />} />
          <Route path="/employeePrivileges" element={<EmployeePrivileges />} />
          <Route path="/monCompte" element={<MonCompte />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myChuCocody" element={<ChuCody />} />
          <Route path="/doctorAndDentistSurveys" element={<DoctorDentistSurvey />} />
          <Route path="/nursingMidwiferySurveys" element={<NursingMidwiferySurvey />} />
          <Route path="/surveyFeedback" element={<SurveyFeedback />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/evaluation/*" element={<Evaluation />} />
          <Route path="/leaveManagement" element={<LeaveManagement />} />
          <Route path="/staff/*" element={<Staff />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobsByDepartment" element={<JobsByDepartment />} />
          <Route path="/requestsLists" element={<RequestsLists />} />
          <Route path="/jobCoding" element={<JobCoding />} />
          <Route path="/natureContract" element={<NatureOfContract />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/workSchedule" element={<WorkSchedule />} />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default DashboardRoutes;
