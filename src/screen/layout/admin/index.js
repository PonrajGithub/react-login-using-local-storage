import React, { useState }from "react";
import { Route, Routes, Link } from "react-router-dom";
// import { Switch } from "react-router"; 
import NavBar from "../../component/NavBar";
import "./index.css"
import Home from "../../view/admin/index.js";
import NotFound404 from "../../component/404NotFound";

function Admin(props) {
    const [checked, SetChecked] = useState(true);

    const handleChange = (checked) => {
        console.log("switch");
        
        if(checked===false){ 
           // document.getElementById("sidebar").setAttribute("style", "display:none")
          document.getElementById("sidebar").setAttribute("class", "display-none");
          SetChecked(false);
        }
        // document.getElementById("sidebar").setAttribute("style", "display:block");
        else{document.getElementById("sidebar").setAttribute("class", "display-block");
        SetChecked(true);}   
      }

    return (

        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar loginInfo={props.name} checked={checked} handleChange={handleChange} onLogout={props.onLogout}/>
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                Admin
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/admin/role">
                    Role 
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/position">
                    Position 
                  </Link> 
                </li>
                <li>
                  <Link to="#">
                    
                    Department 
                  </Link> 
                </li>
                <li>
                  <Link to="#">
                    Project Bidding 
                  </Link> 
                </li>
                <li>
                  <Link to="#">
                    Portal Master 
                  </Link> 
                </li>
                
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleAdmin/> */}
              <Routes>
              <Route path="/" element={<NotFound404 />} /> 
              <Route path="/role" element={<Home />} /> 
              <Route path="/position" element={<NotFound404 />} /> 
              {/* <Route render={() => 
                <NotFound404/>
                  // <Redirect to="/admin/role" />
                } /> */}
              </Routes>
            </div>
          </div>
        </div>
    );
}

export default Admin;