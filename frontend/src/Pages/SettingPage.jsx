import React from "react";
import SideNav from "../components/common/SideNav";
import Header from "../components/common/Header";
import { BiBold } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserLock } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

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
     <div className="bg-color p-3 m-2">
        <h2>  <MdOutlineSettings size={60} />Settings </h2>
        <div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-5 bg-white display-flex justify-content m-5"><MdOutlineManageAccounts size={50} /> <h1>Account</h1> <br />
      manage personal info and login credential </div>
    </div>
    <div class="col-6">
      <div class="p-5 bg-white display-flex justify-content m-5 "> <FaUserLock   size={50}/> <h1>Security and privacy</h1>
        <br /> keep your account secure
      </div>
    </div>
    <div class="col-6">
      <div class="p-5 bg-white display-flex justify-content m-5"><IoMdHelpCircle size={50}/> <h1>Help and support</h1>
      <br /> get assistance anytime </div>
    </div>
    <div class="col-6">
      <div class="p-5 bg-white display-flex justify-content m-5"> <MdPrivacyTip size={50}/> <h1> About</h1>
      <br /> App version and policies  </div>
    </div>
  </div>
</div>
        </div>
        </div>
      </div>
  );
};

export default SettingPage;
