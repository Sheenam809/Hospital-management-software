import React from "react";

const DashboardPatientFee = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "430px",       // FIXED RIGHT SIDE WIDTH (teacher size)
        height: "300px",      // FIXED HEIGHT
      }}
    >
      
      {/* Heading */}
      <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>Patient Fee</h5>
      <div
        style={{
          height: "230px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            margin: 0,
          }}
        >
          {/* ------- ROW 1 -------- */}
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid #dcdcdc" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="patient"
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                }}
              />

              <div className="ms-2">
                <div className="fw-bold">abc</div>
                <div className="text-danger small">Doctor fee pending</div>
              </div>
            </div>

            <button className="btn btn-primary btn-sm">Request Fee</button>
          </li>

          {/* ------- ROW 2 -------- */}
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid #dcdcdc" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="patient"
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                }}
              />

              <div className="ms-2">
                <div className="fw-bold">abc</div>
                <div className="text-danger small">Doctor fee pending</div>
              </div>
            </div>

            <button className="btn btn-primary btn-sm">Request Fee</button>
          </li>

          {/* ------- ROW 3 -------- */}
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid #dcdcdc" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="patient"
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                }}
              />

              <div className="ms-2">
                <div className="fw-bold">abc</div>
                <div className="text-danger small">Doctor fee pending</div>
              </div>
            </div>

            <button className="btn btn-primary btn-sm">Request Fee</button>
          </li>
          {/* row 4*/}

          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid #dcdcdc" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="patient"
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                }}
              />

              <div className="ms-2">
                <div className="fw-bold">abc</div>
                <div className="text-danger small">Doctor fee pending</div>
              </div>
            </div>

            <button className="btn btn-primary btn-sm">Request Fee</button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default DashboardPatientFee;
