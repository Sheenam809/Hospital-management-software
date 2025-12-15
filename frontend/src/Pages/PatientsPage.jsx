import React from "react";
import SideNav from "../components/common/SideNav";
import Header from "../components/common/Header";
import { AiFillMessage } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { RiAccountPinBoxFill } from "react-icons/ri";

const PatientsPage = () => {
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
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div
            className="patients-title-row d-flex justify-content-between align-items-center mb-2"
            style={{ width: "90%", height: "100%" }}
          >
            <h2>Patient Info</h2>
            <button className="add-btn bg-primary">+ New Patient</button>
          </div>
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
        <div className="table-responsive mt-4">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {/* 1st Row */}
              <tr>
                <td> < RiAccountPinBoxFill size={30}/>John Doe</td>
                <td>32</td>
                <td>Male</td>
                <td>A +VE</td>
                <td>9876543210</td>
                <td>john12@gmail.com</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <AiFillMessage size={20} />
                    </button>
                    <button className="btn btn-danger">
                      <FiDelete />
                    </button>
                    <button className="btn btn-dark">
                      <IoInformationCircleOutline />
                    </button>
                    <button className="btn btn-secondary">
                      <BiEdit />
                    </button>
                  </div>
                </td>
              </tr>

              {/* 2nd Row */}
              <tr>
                <td>< RiAccountPinBoxFill size={30}/>Sara Khan</td>
                <td>27</td>
                <td>Female</td>
                <td>B +VE</td>
                <td>9123456789</td>
                <td>sarah@gmail.com</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <AiFillMessage size={20} />
                    </button>
                    <button className="btn btn-danger">
                      <FiDelete />
                    </button>
                    <button className="btn btn-dark">
                      <IoInformationCircleOutline />
                    </button>
                    <button className="btn btn-secondary">
                      <BiEdit />
                    </button>
                  </div>
                </td>
              </tr>

              {/* 3rd Row */}
              <tr>
                <td> < RiAccountPinBoxFill size={30}/>Zaid Khan</td>
                <td>32</td>
                <td>Male</td>
                <td>A +VE</td>
                <td>98700410</td>
                <td>zk812@gmail.com</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <AiFillMessage size={20} />
                    </button>
                    <button className="btn btn-danger">
                      <FiDelete />
                    </button>
                    <button className="btn btn-dark">
                      <IoInformationCircleOutline />
                    </button>
                    <button className="btn btn-secondary">
                      <BiEdit />
                    </button>
                  </div>
                </td>
              </tr>

              {/* 4th Row */}
              <tr>
                <td> < RiAccountPinBoxFill size={30}/>Mahira Khan</td>
                <td>21</td>
                <td>Female</td>
                <td>A +VE</td>
                <td>784556789</td>
                <td>mahira12@gmail.com</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <AiFillMessage size={20} />
                    </button>
                    <button className="btn btn-danger">
                      <FiDelete />
                    </button>
                    <button className="btn btn-dark">
                      <IoInformationCircleOutline />
                    </button>
                    <button className="btn btn-secondary">
                      <BiEdit />
                    </button>
                  </div>
                </td>
              </tr>

              {/* 5th Row */}
              <tr>
                <td> < RiAccountPinBoxFill size={30}/>Gufran Khan</td>
                <td>32</td>
                <td>Male</td>
                <td>A +VE</td>
                <td>98700410</td>
                <td>gufran812@gmail.com</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <AiFillMessage size={20} />
                    </button>
                    <button className="btn btn-danger">
                      <FiDelete />
                    </button>
                    <button className="btn btn-dark">
                      <IoInformationCircleOutline />
                    </button>
                    <button className="btn btn-secondary">
                      <BiEdit />
                    </button>
                  </div>
                </td>
              </tr>

              {/* 6th Row */}
              <tr>
                <td> < RiAccountPinBoxFill size={30}/>Hasnain Khan</td>
                <td>32</td>
                <td>Male</td>
                <td>B +VE</td>
                <td>98700410</td>
                <td>khanhasnain@gmail.com</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <AiFillMessage size={20} />
                    </button>
                    <button className="btn btn-danger">
                      <FiDelete />
                    </button>
                    <button className="btn btn-dark">
                      <IoInformationCircleOutline />
                    </button>
                    <button className="btn btn-secondary">
                      <BiEdit />
                    </button>
                  </div>
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
  );
};

export default PatientsPage;
