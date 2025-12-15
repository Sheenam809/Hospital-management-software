import React from "react";
import SideNav from "../components/common/SideNav";
import Header from "../components/common/Header";

const SettingPage = () => {
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
     <div className="bg-color">
        <div className="shadow-lg text-align-items-center">
          <h3> Account Setting</h3>
        </div>

        <div className="shadow-lg text-align-items-center">
          <h3> Account Setting</h3>
        </div>
        </div>
        </div>
      </div>
  );
};

export default SettingPage;
