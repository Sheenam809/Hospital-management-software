import React from "react";
import { TbBellFilled } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
    return(
<div className="d-flex justify-content-between
 align-items-center m-4">
<h2  className=" "> title </h2>
<div className="d-flex align-items-center ">
    <div>
        <TbBellFilled size={30} className="m-3"/>
        <MdAccountCircle size={40}/>
    </div>
    
    <div className="p-1"> Sheenam Khan <br /> Admin </div>
     </div>
</div>
    )
}


export default Header;