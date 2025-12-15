import React from "react";
import Header from "../components/common/Header";
import SideNav from "../components/common/SideNav";
import { FiDelete } from "react-icons/fi";
import { RiAccountPinBoxFill } from "react-icons/ri";


const AppointmentPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />

      <div
        className="content-area"
        style={{
          flex: 1,
          padding: "10px",
        }}
      >
        <Header />

        {/* Title Row */}
        <div className="p-2 bg-color">
        <div className="shadow-lg  d-flex justify-content-between m-3 p-3 bg-white text-align-center" 
          >
            <h2> Appointments </h2>
            <button className="add-btn bg-primary text-white btn">+ New Appointments</button>
           </div>
            {/* Search + Date Row */}
        <div className="row d-flex align-items-center" style={{ marginTop: "20px" }}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search Patients…"
              style={{ padding: "5px", borderRadius: "4px" }}
            />
          </div>

          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              style={{ padding: "5px", borderRadius: "4px" }}
            />
          </div>
        </div>
         {/* Table */}
       <div className="table-responsive mt-4"
       style={{
    maxHeight: "300px",   
    overflowY: "auto",    
    overflowX: "auto"     
  }}>
  <table className="table table-striped table-hover align-middle">
    <thead className="table-light">
      <tr>
        <th>Time</th>
        <th>Date</th>
        <th>Patient Name</th>
        <th>Patient Age</th>
        <th>Doctor</th>
        <th>User Action</th>
      </tr>
    </thead>

    <tbody>
      {/* 1st Row */}
      <tr>
        <td>10:30 AM</td>
        <td>26/02/2026</td>
        <td><RiAccountPinBoxFill/> Almas Fatema</td>
        <td>31</td>
        <td>Dr. Rahul</td>
        <td>
          <button className="btn btn-primary btn-sm">View</button>
          <button className="btn btn-danger btn-sm ms-2">
            <FiDelete />
          </button>
        </td>
      </tr>

      {/* 2nd Row Example */}
      <tr>
        <td>02:00 PM</td>
        <td>26/02/2026</td>
        <td><RiAccountPinBoxFill/>Sameer Khan</td>
        <td>40</td>
        <td>Dr. Mehta</td>
        <td>
          <button className="btn btn-primary btn-sm">View</button>
          <button className="btn btn-danger btn-sm ms-2">
            <FiDelete />
          </button>
        </td>
      </tr>
      {/*3rd row*/}
      <tr>
        <td>10:30 AM</td>
        <td>26/02/2026</td>
        <td><RiAccountPinBoxFill/>Almas Fatema</td>
        <td>32</td>
        <td>Dr. Rahul</td>
        <td>
          <button className="btn btn-primary btn-sm">View</button>
          <button className="btn btn-danger btn-sm ms-2">
            <FiDelete />
          </button>
        </td>
      </tr>
      {/*4rth row*/}
       <tr>
        <td>02:00 PM</td>
        <td>26/02/2026</td>
        <td><RiAccountPinBoxFill/>Sameer Khan</td>
        <td>40</td>
        <td>Dr. Mehta</td>
        <td>
          <button className="btn btn-primary btn-sm">View</button>
          <button className="btn btn-danger btn-sm ms-2">
            <FiDelete />
          </button>
        </td>
      </tr>
      {/*5th row*/}
       <tr>
        <td>02:00 PM</td>
        <td>26/02/2026</td>
        <td><RiAccountPinBoxFill />Sameer Khan</td>
        <td>40</td>
        <td>Dr. Mehta</td>
        <td>
          <button className="btn btn-primary btn-sm">View</button>
          <button className="btn btn-danger btn-sm ms-2">
            <FiDelete />
          </button>
        </td>
      </tr>
      {/*5th row*/}
       <tr>
        <td>02:00 PM</td>
        <td>26/02/2026</td>
        <td><RiAccountPinBoxFill/>Sameer Khan</td>
        <td>40</td>
        <td>Dr. Mehta</td>
        <td>
          <button className="btn btn-primary btn-sm">View</button>
          <button className="btn btn-danger btn-sm ms-2">
            <FiDelete />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
 </div>
 
         </div>
    </div>
     
    
)
}

  export default AppointmentPage;
