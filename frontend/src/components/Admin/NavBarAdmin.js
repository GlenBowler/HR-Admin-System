import React, { useState } from "react";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";

function NavBarAdmin() {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen((state) => {
      return state ? false : true;
    });
  };

  const signout = () => {
    localStorage.removeItem("staff");
    const location = (window.location.href = "/");
    return location;
  };

  return (
    <div className="navBar_container">
      <div className="navBar_inside_container">
        <nav>
          <div className="navBar_inside">
            <button type="button" className="button" onClick={showMenu}>
              <img src={hamburger} alt="" width="80px" />
            </button>
            <h3 className="navbar_header">HR Administration System</h3>
          </div>
          {open && (
            <div className="dropdown">
              <p className="dropDown_menu_header">Menu</p>
              <ul>
                <li>
                  <Link to="/main" className="links">
                    Employee Listings
                  </Link>
                </li>
                <li>
                  <Link to="/department" className="links">
                    Department Listings
                  </Link>
                </li>
                <li>
                  <Link to="/add" className="links">
                    Add Staff Member
                  </Link>
                </li>
                <li>
                  <Link to="/addDept" className="links">
                    Add Department
                  </Link>
                </li>
                <li>
                  <button className="signout_button" onClick={signout}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBarAdmin;
