import { Route, Routes, Navigate } from 'react-router-dom'
import React from 'react';
import Vacancies from '../pages/Vacancies/Vacancies'
import MyVacancies from '../pages/MyVacancies/MyVacancies'
import ActiveVacancies from '../pages/ActiveVacancies/ActiveVacancies'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import CompanySignup from '../pages/CompanySignup/CompanySignup';
import CreateVacancy from '../pages/CreateVacancy/CreateVacancy';

function Router() {
  return (
    <Routes>
      <Route path="/active-vacancies/*" element={<ActiveVacancies />}/>
      <Route path="/create-vacancy" element={<CreateVacancy/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/company-signup" element={<CompanySignup />}/>
      <Route path="/my-vacancies/*" element={<MyVacancies />}/>
      <Route path="/vacancies/*" element={<Vacancies />}/>
      <Route path="*" element={<Navigate to="/login"/>}/>
    </Routes>
  );
}

export default Router;