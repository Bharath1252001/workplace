import React from "react";
import { BrowserRouter, Outlet,Routes, Route } from "react-router-dom";
import Landingpage from "../Components/Landingpage";
import Auth from "../Components/Auth";
import CandidateApplication from "../Components/Candidate/Application";
import CandidateConversation from "../Components/Candidate/Conversation";
import CandidateJobs from "../Components/Candidate/Jobs";
import CandidateOnboarding from "../Components/Candidate/Onboarding";
import CandidateProfile from "../Components/Candidate/Profile";
import TopBar from "../Components/Landingpage/TopBar";

import EmployeeApplication from "../Components/Employee/Application";
import EmployeeConversation from "../Components/Employee/Conversation";
import EmployeeJobs from "../Components/Employee/Jobs";
import EmployeeOnboarding from "../Components/Employee/Onboarding";
import EmployeeProfile from "../Components/Employee/Profile";

function Navs() {
  const Candidateprotected = () => {
    const pages = [
      {
        title: "Jobs",
        path: "/candidate/jobs",
      },
      {
        title: "Profile",
        path: "/candidate/profile",
      },
      {
        title: "Conversation",
        path: "/candidate/conversation",
      },
      {
        title: "Applications",
        path: "/candidate/applications",
      },
    ];
    return (
      <div>
        <TopBar pages={pages} />
        <div
        style={{
          marginTop: '100px',
        }}
        >  <Outlet /></div>
      
      </div>
    );
  };
  const EmployerProtected = () => {
    const pages = [
      {
        title: "Jobs",
        path: "/employee/jobs",
      },
      {
        title: "Profile",
        path: "/employee/profile",
      },
      {
        title: "Conversation",
        path: "/employee/conversation",
      },
      {
        title: "Applicants",
        path: "/employee/applicants",
      },
    ];
    return (
      <div>
        <TopBar pages={pages} />
        <div
        style={{
          marginTop: '100px',
        }}
        >
             <Outlet />
        </div>
     
      </div>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/employee/auth" element={<Auth type={"Employee"} />} />
          <Route path="/candidate/auth" element={<Auth type={"Candidate"} />} />

          <Route element={<Candidateprotected />}>
            <Route
              path="/Candidate/Application"
              element={<CandidateApplication />}
            />
            <Route
              path="/Candidate/Conversation"
              element={<CandidateConversation />}
            />
            <Route path="/Candidate/Jobs" element={<CandidateJobs />} />
            <Route
              path="/Candidate/Onboarding"
              element={<CandidateOnboarding />}
            />
            <Route path="/Candidate/Profile" element={<CandidateProfile />} />
          </Route>

          <Route element={<EmployerProtected />}>
            <Route
              path="/Employee/Application"
              element={<EmployeeApplication />}
            />
            <Route
              path="/Employee/Conversation"
              element={<EmployeeConversation />}
            />
            <Route path="/Employee/Jobs" element={<EmployeeJobs />} />
            <Route
              path="/Employee/Onboarding"
              element={<EmployeeOnboarding />}
            />
            <Route path="/Employee/Profile" element={<EmployeeProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navs;
