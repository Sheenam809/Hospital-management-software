import React from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import SideNav from "./components/common/SideNav.jsx";
import {   BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./components/common/Header";
import PatientsPage from "./Pages/PatientsPage.jsx";
import AppointmentPage from "./Pages/AppointmentPage.jsx"
import DoctorsPage from "./Pages/DoctorsPage.jsx";
import EducationContentPage from "./Pages/EducationContentPage.jsx";
import MedicineInventoryPage from "./Pages/MedicineInventoryPage.jsx";
import MessagePage from "./Pages/MessagePage.jsx";
import SettingPage from "./Pages/SettingPage.jsx"


const App = () => {
  return(
    <BrowserRouter>
 <div>
 <Routes>
<Route path="/" element={<LoginPage/>}/>
<Route  path="/dashboard" element={<DashboardPage/>}/>
 <Route  path="/patients" element={<PatientsPage/>}/>
 <Route  path="/appointment" element={<AppointmentPage/>}/>
 <Route  path="/doctors" element={<DoctorsPage/>}/>
 <Route  path="/message" element={<MessagePage/>}/>
 <Route  path="/medicine-inventory" element={<MedicineInventoryPage/>}/>
 <Route  path="/education-content" element={<EducationContentPage/>}/>
 <Route  path="/settings" element={<SettingPage/>}/>
 </Routes>
 </div>
</BrowserRouter>

  )
}
export default App;