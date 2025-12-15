import React from "react";

const DashboardEducationContent = () => {
  return (
    <div
      className="mt-4"
      style={{
         background: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "430px",       // FIXED RIGHT SIDE WIDTH (teacher size)
        height: "300px",      
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          width: "520px", // fixed exact teacher width
        }}
      >
        <h5 style={{ fontWeight: "bold" }}>Education Content</h5>
<div>
        <div
          style={{
            height: "30vh",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {/* Row 1 */}
            <li
              className="w-100 d-flex justify-content-between align-items-center py-2"
              style={{ borderBottom: "1px solid grey" }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <img
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    src="https://c8.alamy.com/comp/J0FC5J/balanced-diet-healthy-food-on-wooden-table-J0FC5J.jpg"
                    alt="Diet Plan"
                  />
                </div>

                <div className="ms-2">
                  <div className="educationContentTitle">
                    4 Nutritions to take daily
                  </div>
                  <div className="educationContentSubTitle text-secondary">
                    By Zakir khan
                  </div>
                </div>
              </div>

              <button className="btn btn-primary">Assign</button>
            </li>

            {/* Row 2 */}
            <li
              className="w-100 d-flex justify-content-between align-items-center py-2"
              style={{ borderBottom: "1px solid grey" }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <img
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    src="https://c8.alamy.com/comp/J0FC5J/balanced-diet-healthy-food-on-wooden-table-J0FC5J.jpg"
                    alt="Diet Plan"
                  />
                </div>

                <div className="ms-2">
                  <div className="educationContentTitle">
                    4 Nutritions to take daily
                  </div>
                  <div className="educationContentSubTitle text-secondary">
                    By Zakir Khan
                  </div>
                </div>
              </div>

              <button className="btn btn-primary">Assign</button>
            </li>

            {/* Row 3 */}
            <li
              className="w-100 d-flex justify-content-between align-items-center py-2"
              style={{ borderBottom: "1px solid grey" }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <img
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    src="https://c8.alamy.com/comp/J0FC5J/balanced-diet-healthy-food-on-wooden-table-J0FC5J.jpg"
                    alt="Diet Plan"
                  />
                </div>

                <div className="ms-2">
                  <div className="educationContentTitle">
                    4 Nutrients to take daily
                  </div>
                  <div className="educationContentSubTitle text-secondary">
                    By Zakir Khan
                  </div>
                </div>
              </div>

              <button className="btn btn-primary">Assign</button>
            </li>
            {/* row 4*/}
             <li
              className="w-100 d-flex justify-content-between align-items-center py-2"
              style={{ borderBottom: "1px solid grey" }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <img
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    src="https://c8.alamy.com/comp/J0FC5J/balanced-diet-healthy-food-on-wooden-table-J0FC5J.jpg"
                    alt="Diet Plan"
                  />
                </div>

                <div className="ms-2">
                  <div className="educationContentTitle">
                    4 Nutrients to take daily
                  </div>
                  <div className="educationContentSubTitle text-secondary">
                    By Zakir Khan
                  </div>
                </div>
              </div>

              <button className="btn btn-primary">Assign</button>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEducationContent;
