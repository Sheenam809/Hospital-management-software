import Sidebar from "../components/common/SideNav";
import Header from "../components/common/Header";
import ActivityOverView from "../components/dashboard/ActivityOverView";
import DashboardAppointments from "../components/dashboard/DashboardAppointments";
import DashboardEducationContent from "../components/dashboard/DashboardEducationContent";
import DashboardPatientFee from "../components/dashboard/DashboardPatientFee";
import MedicineGraph from "../components/dashboard/medicineGraph";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        className="content-area"
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Header />

        <div
          style={{
            display: "flex", 
            gap: "20px",     
          }}
        >
          <ActivityOverView />
          <DashboardAppointments />
        </div>
        <div className=" p-4 bg-color d-flex " style={{
          display:"flex",
          justifyContent :" space-between",
          alignItems :"flex-start",
          gap :"20px",}}>
          <div style={{ flex: 1 }}>
            <DashboardEducationContent />
          </div>
           <div style={{ flex: 1 }}>
            <MedicineGraph />
          </div>
          <div style={{ width: "350px" }}>
            <DashboardPatientFee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
