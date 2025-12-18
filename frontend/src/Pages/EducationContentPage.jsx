import React from "react";
import SideNav from "../components/common/SideNav";
import Header from "../components/common/Header";
const EducationContentPage= () => {
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
{/* searchbar and title*/}
        <div className="p-3 m-4 bg-color">
          <h1> Education Content </h1>
          <div className="row d-flex align-items-center" style={{ marginTop: "20px" }}>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search…"
                style={{ padding: "5px", borderRadius: "4px" }}
              />




            </div>
          </div>
          
     
      </div>  
</div>
    </div>    
  )   
      }
export default EducationContentPage;
