import React from "react";
import Header from "../components/common/Header";
import SideNav from "../components/common/SideNav";

const MessagePage = () => {
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
        <div className="p-2 bg-color">
          <div className="shadow-lg d-flex justify-content-between m-3 p-3 bg-white text-align-center">
            <h2>  Message </h2>
          </div>
          {/* message page*/}
          <div className="container-fluid">
            <div className="row">
              {/* left side*/}
              <div className="col-md-4">
                <div className="shadow p-3 bg-white rounded" style={{height:"75vh", overflow:"auto"}}>
             {/* search Input*/}
             <input type="text" 
             className="form-control mb-3"
             placeholder="Search..."
             />
             {[
              {name:"Arifa Anjum", msg:"sent attachment", time:"9:00am"},
              {name:"fatimah khan", msg:"sent attachment", time:"10:00am"},
              {name:"kamran Ali", msg:"sent attachment", time:"8:00am"},
              {name:"Aksa Anjum", msg:"sent attachment", time:"7:30am"},
             ] .map((user,index)=>(
              <div key={index}
              className="d-flex justify-content-between align-items-center p-2 border-bottom"
                      style={{ cursor: "pointer" }}>
                <div>
                        <strong>{user.name}</strong>
                        <div style={{ fontSize: "12px", color: "gray" }}>{user.msg}</div>
                      </div>
                      <span style={{ fontSize: "12px", color: "gray" }}>
                        {user.time}
                      </span>
              </div>
             ))}
                </div>
              </div>
              {/* RIGHT CHAT WINDOW */}
              <div className="col-md-8">
                <div className="shadow p-3 bg-white rounded" style={{ height: "75vh", display: "flex", flexDirection: "column" }}>

                  {/* Chat Header */}
                  <div className="p-2 bg-primary text-white rounded mb-2">
                    <strong>Ashna Anjum</strong> <span className="ms-2">Online</span>
                  </div>

                  {/* Chat Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: "auto",
                      padding: "10px",
                    }}
                  >

                    {/* Incoming Message */}
                    <div className="mb-3">
                      <p>Hi, I need to meet Dr. Vaishu Tomorrow urgently.</p>
                      <span style={{ fontSize: "12px", color: "gray" }}>11:20pm</span>
                    </div>

                    {/* Outgoing Message */}
                    <div className="text-end mb-3">
                      <p className="bg-primary text-white d-inline-block p-2 rounded">
                        All appointments are full. I can put you on the list.
                      </p>
                      <br />
                      <span style={{ fontSize: "12px", color: "gray" }}>11:25pm</span>
                    </div>

                  </div>

                  {/* Message Input */}
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message..."
                    />
                    <button className="btn btn-primary ms-2">Send</button>
                  </div>

                </div>
              </div>

            </div>
          </div>



           </div>
            </div>
             </div>
  );
};

export default MessagePage;
