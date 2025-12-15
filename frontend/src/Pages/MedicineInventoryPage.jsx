import React from "react";
import SideNav from "../components/common/SideNav";
import Header from "../components/common/Header";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const MedicineInventoryPage = () => {
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
            <h2> Medicine </h2>
            <button className="add-btn bg-primary text-white btn">
              + Add Product
            </button>
          </div>
 </div>
 {/* Search Row */}
 <div className="bg-color p-2 ">
<div className="row align-items-center g-3 mt-3">

  {/* Search Bar */}
  <div className="col-auto">
    <input 
      type="text"
      className="form-control"
      placeholder="Search Products..."
      style={{ width: "250px" }}
    />
  </div>

  {/* Product Type */}
  <div className="col-auto">
    <select className="form-select">
      <option>Product Type</option>
      <option>Tablet</option>
      <option>Syrup</option>
    </select>
  </div>

  {/* Stock Status */}
  <div className="col-auto">
    <select className="form-select">
      <option>Stock Status</option>
      <option>In Stock</option>
      <option>Out of Stock</option>
    </select>
  </div>

  {/* Manufacturer (Replaced Product Type Again) */}
  <div className="col-auto">
    <select className="form-select">
      <option>Manufacturer</option>
      <option>Cipla</option>
      <option>Sun Pharma</option>
      <option>Dr. Reddy's</option>
      <option>Asra Health care</option>
    </select>
  </div>

  {/* Date */}
  <div className="col-auto">
    <input 
      type="date"
      className="form-control"
    />
  </div>
  {/*Table*/}
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
                    <th>Product Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th>Expiry Date</th>
                     <th>Manufacturer</th>
                    <th>User Action</th>
                  </tr>
                </thead>
  
                <tbody>
                  {/* 1st row */}
                  <tr>
                    <td> Albuterol</td>
                    <td>Inhaler</td>
                    <td> 76 </td>
                    <td>100 pcs </td>
                    <td> 2024-06-01</td>
                      <td>Asra Health Care</td>
                      <td><FaRegEdit size={20}/> < FaPlus size={20}/> <FaMinus size={20}/></td>
                  </tr> 

                  {/*2nd row*/}
                  <tr>
                    <td> Amoxicillin 250 mg</td>
                    <td>Tablet</td>
                    <td>12.5 </td>
                    <td>40 pcs </td>
                    <td> 2025-07-01</td>
                      <td> sun pharma</td>
                      <td>  <FaRegEdit size={20}/> < FaPlus size={20}/><FaMinus size={20}/></td>
                  </tr> 
                  {/*3rd row*/}

                  <tr>
                    <td> Amoxicillin 250 mg</td>
                    <td>Tablet</td>
                    <td>12.5 </td>
                    <td>120 pcs </td>
                    <td> 2026-07-01</td>
                      <td> cipla r</td>
                      <td> <FaRegEdit size={20}/> < FaPlus size={20}/> <FaMinus size={20}/></td>
                  </tr> 
                  {/*4rth row*/}
                  <tr>
                    <td> Amoxicillin 250 mg</td>
                    <td>Syrup</td>
                    <td>12.5 </td>
                    <td>120 pcs </td>
                    <td> 2026-07-01</td>
                      <td> DR Reddy's</td>
                      <td> <FaRegEdit size={20}/>  < FaPlus size={20}/><FaMinus size={20}/></td>
                  </tr> 
                  {/*5th row*/}
                   <tr>
                    <td> Amoxicillin 250 mg</td>
                    <td>Tablet</td>
                    <td>12.5 </td>
                    <td>40 pcs </td>
                    <td> 2025-07-01</td>
                      <td> sun pharma</td>
                      <td> <FaRegEdit size={20}/>  < FaPlus size={20}/> <FaMinus size={20}/></td>
                  </tr> 
                  {/*6th row*/}
                   <tr>
                    <td> Amoxicillin 250 mg</td>
                    <td>Syrup</td>
                    <td>12.5 </td>
                    <td>120 pcs </td>
                    <td> 2026-07-01</td>
                      <td> DR Reddy's</td>
                      <td> <FaRegEdit size={20}/>  < FaPlus size={20}/><FaMinus size={20}/></td>
                  </tr> 
                  {/*7th row*/ }
                   <tr>
                    <td> Albuterol</td>
                    <td>Inhaler</td>
                    <td> 76 </td>
                    <td>100 pcs </td>
                    <td> 2024-06-01</td>
                      <td>Asra Health Care</td>
                      <td> <FaRegEdit size={20}/>  < FaPlus size={20}/><FaMinus size={20}/></td>
                  </tr> 
          </tbody>
  </table>

</div>

</div>
</div>


</div>


          </div>

 
          


  );
  };
export default MedicineInventoryPage;
