import React , {useState} from "react";
import Header from "../components/common/Header";
import SideNav from "../components/common/SideNav";
import { FaUserDoctor } from "react-icons/fa6";


const DoctorForm = ({ closeForm }) => {
  return (
    <div className="shadow-lg rounded p-4 bg-white mt-3">
      <h4 className="mb-3">Add New Doctor </h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Doctor Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-md-3 mb-3">
          <label> Qualification </label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-md-3 mb-3">
          <label> Specialist</label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-md-6 mb-3">
          <label> Experience </label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-md-6 mb-3">
          <label> phone </label>
          <input type="text" className="form-control"  />
        </div>
      </div>
      
      <div className="d-flex gap-2">
        <button className="btn btn-success">Save Appointment</button>
        <button className="btn btn-secondary" onClick={closeForm}>
          Cancel
        </button>
      </div>
    </div>
  );
};



const DoctorsPage = () => {
   const [showForm, setShowForm] = useState(false);
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
         {showForm && <DoctorForm closeForm={() => setShowForm(false)} />}
        <div className="p-2 bg-color">
          <div className="shadow-lg d-flex justify-content-between m-3 p-3 bg-white text-align-center">
            <h2>Doctor Details</h2>
            <button
  className="add-btn bg-primary text-white btn"
  onClick={() => setShowForm(true)}
> + new Doctor</button>
          </div>

          {/* Search Row */}
          <div className="row d-flex align-items-center" style={{ marginTop: "20px" }}>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search Doctors…"
                style={{ padding: "5px", borderRadius: "4px" }}
              />
            </div>
          </div>

          {/* Table */}
          <div
            className="table-responsive mt-4"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              overflowX: "auto",
            }}
          >
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Doctor Name</th>
                  <th>Qualification</th>
                  <th>Specialist</th>
                  <th>Experience</th>
                  <th>Contact No.</th>
                </tr>
              </thead>

              <tbody>
                {/* 1st row */}
                <tr>
                  <td><FaUserDoctor size={30}/>Sheenam Khan</td>
                  <td>MBBS, MD</td>
                  <td>Physician</td>
                  <td>10 years</td>
                  <td>24367-56521</td>
                </tr>

                {/* 2nd row */}
                <tr>
                  <td><FaUserDoctor size={30}/>Anam Khan</td>
                  <td>MBBS, MS</td>
                  <td>Orthopedic</td>
                  <td>8 years</td>
                  <td>12345-89653</td>
                </tr>

                {/* 3rd row */}
                <tr>
                  <td><FaUserDoctor size={30}/>Ashmira Khan</td>
                  <td>MBBS, MS</td>
                  <td>Optometrist</td>
                  <td>9 years</td>
                  <td>26646-98734</td>
                </tr>

                {/* 4th row */}
                <tr>
                  <td><FaUserDoctor size={30}/>Mahira Khan</td>
                  <td>BDMS</td>
                  <td>Dentist</td>
                  <td>5 years</td>
                  <td>23416-09862</td>
                </tr>

                {/* 5th row */}
                <tr>
                  <td><FaUserDoctor size={30}/>Adiba Ali</td>
                  <td>MBBS</td>
                  <td>General Physician</td>
                  <td>8 years</td>
                  <td>54378-009751</td>
                </tr>
                {/*6th row*/}
                 <tr>
                  <td><FaUserDoctor size={30}/>kashif Khan</td>
                  <td>MBBS, MD</td>
                  <td>Neurologist</td>
                  <td>10 years</td>
                  <td>24307-56521</td>
                </tr>
                {/*7th row*/}
                 <tr>
                  <td><FaUserDoctor size={30}/>Gufran Khan</td>
                  <td>MBBS, MS</td>
                  <td>Orthopedic</td>
                  <td>8 years</td>
                  <td>12345-89653</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-8 m-4">
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
</nav></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
