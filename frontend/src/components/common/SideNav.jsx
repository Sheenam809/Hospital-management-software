import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidClinic } from "react-icons/bi";
import { IoSpeedometer } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { AiFillMedicineBox } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";


const SideNav = () => {
  return (
    <div  className="sidenav-box">

      <div className="heading d-flex align-items-center p-4 t-bold">
        <BiSolidClinic size={60} /> <span>JHC Clinic</span>
      </div>  
      <ul style={{listStyleType:'none'}} >
<li>
<NavLink to='/dashboard'>
<div className="m-4"><IoSpeedometer size={30}/>{' '}  Dashboard </div>
</NavLink>
</li>
        
 <li>
  <NavLink to = {'/patients'}>
<div className="m-4">
<IoPeopleSharp size ={30}/> {' '}
patients
</div>
  </NavLink>
  </li>       

<li>
  <NavLink to = {'/Appointment'}>
<div className="m-4">
<IoDocumentText size ={30}/> {' '}
Appointment
</div>
  </NavLink>
  </li>       

<li>
  <NavLink to = {'/doctors'}>
<div className="m-4">
<FaUserDoctor size ={30}/> {' '}
Doctors
</div>
  </NavLink>
  </li>       

  <li>
  <NavLink to = {'/Message'}>
<div className="m-4">
<AiFillMessage size ={30}/> {' '}
Message
</div>
  </NavLink>
  </li>       

  
  <li>
  <NavLink to = {'/Education-Content'}>
<div className="m-4">
<MdLibraryBooks  size ={30}/> {' '}
Education-content
</div>
  </NavLink>
  </li>       

  
  <li>
  <NavLink to = {'/medicine-inventory'}>
<div className="m-4">
<AiFillMedicineBox size ={30}/> {' '}
Medicine inventory
</div>
  </NavLink>
  </li>    

<li>
  <NavLink to = {'/Settings'}>
<div className="m-4">
<IoSettings  size ={30}/> {' '}
Settings
</div>
  </NavLink>
  </li>       

  <li>
  <NavLink to = {'/Logout'}  className="logout-bg">
<div className="m-4">
<FiLogOut  size ={30}/> {' '}
Logout
</div>
  </NavLink>
  </li>       
   

      </ul>
    </div>
  );
};

export default SideNav;
