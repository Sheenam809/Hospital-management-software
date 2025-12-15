import { IoIosDocument } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { RiMedicineBottleFill } from "react-icons/ri";
import { LuNotebookText } from "react-icons/lu";

const ActivityOverView = () => {
  return (
    <div  
      className="activityOverViewParentContainer shadow-lg rounded p-3 bg-white"
      style={{ width: "30%",  height:"50%"}}
    >

      {/* Title + Dropdown */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5>Activity Overview</h5>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Select
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item">Daily</a></li>
            <li><a className="dropdown-item">Weekly</a></li>
            <li><a className="dropdown-item">Monthly</a></li>
            <li><a className="dropdown-item">Yearly</a></li>
            <li><a className="dropdown-item">All</a></li>
          </ul>
        </div>
      </div>

      {/* 1st and 2nd */}
      <div className="d-flex gap-2 mt-3">

  <div className="activity-box box-blue">
    <div className="text-center"><IoIosDocument size={25} /></div>
    <div className="text-center fw-bold">25</div>
    <div className="text-center">Appointment</div>
  </div>

  <div className="activity-box box-green">
    <div className="text-center"><IoMdPeople size={25} /></div>
    <div className="text-center fw-bold">25</div>
    <div className="text-center">Patients</div>
  </div>

</div>

{/* 2nd row */}
<div className="d-flex gap-2 mt-2">

  <div className="activity-box box-yellow">
    <div className="text-center"><RiMedicineBottleFill size={25} /></div>
    <div className="text-center fw-bold">25</div>
    <div className="text-center">Medicine Sold</div>
  </div>

  <div className="activity-box box-purple">
    <div className="text-center"><LuNotebookText size={25} /></div>
    <div className="text-center fw-bold">25</div>
    <div className="text-center">Education Content</div>
  </div>

</div>

      </div>
    
  );
};

export default ActivityOverView;
