import React from "react";
import { RiAccountBoxFill } from "react-icons/ri";
const DashboardAppointments = () => {
    return (
  <div  className="DashboardAppointmentParentContainer shadow-lg rounded p-3 bg-white"
  style={{width :"70%" ,height:"50%"}}>
<h4> Appointment </h4>
    {/*title*/}
    <div className="d-flex justify-content-top align-items-center mb-2">
      
<div className="DashboardAppointment w-100 h-50 justify-content-between shadow-lg rounded p-3 ms-2">
    <table class="table table-hover"
>
  <thead>
    <tr>
      <th scope="col">  Time</th>
      <th scope="col"> Date</th>
      <th scope="col"> Pateint Name</th>
      <th scope="col">Doctor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td> 9 AM - 10 AM </td>
        <td> 27/10/15</td>
        <td><RiAccountBoxFill className="me-1" size={20} /> Zakir</td>
        <td> Rahul</td>
    </tr>
    <tr>
       <td> 9 AM - 10 AM </td>
        <td> 27/10/15</td>
        <td> <RiAccountBoxFill className="me-1" size={20}/>Zakir</td>
        <td> Rahul</td>
    </tr>
    <tr>
       <td> 9 AM - 10 AM </td>
        <td> 27/10/15</td>
        <td><RiAccountBoxFill className="me-1"  size={20}/> Zakir</td>
        <td> Rahul</td>
    </tr>
    <tr>
       <td> 9 AM - 10 AM </td>
        <td> 27/10/15</td>
        <td><RiAccountBoxFill className="me-1" size={20} /> Zakir</td>
        <td> Rahul</td>
    </tr>
    <tr>
       <td> 9 AM - 10 AM </td>
        <td> 27/10/15</td>
        <td><RiAccountBoxFill className="me-1" size={20} /> Zakir</td>
        <td> Rahul</td>
    </tr>

     <tr>
       <td> 9 AM - 10 AM </td>
        <td> 27/10/15</td>
        <td> <RiAccountBoxFill className="me-1" size={20}/>Zakir</td>
        <td> Rahul</td>
    </tr>
  </tbody>
</table></div>
</div>
</div>
    )  ;
};
export default  DashboardAppointments;