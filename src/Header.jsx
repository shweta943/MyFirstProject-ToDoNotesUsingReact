import React from "react";
import Logo from "./Images/elite_logo.PNG";
import "./header.css";

const Header=()=>{
    return (
        <>
            <div className="header">
                <img src={Logo} alt="" width="90" height="50" style={{ marginTop:"5px",marginLeft:"4px", marginBottom:"4px",float:"left"}} />
                <h1 style={{/*textAlign:"center"*/color:"whitesmoke"}}>Elite Keep</h1>
            </div>
        </>
    );
};

export default Header;