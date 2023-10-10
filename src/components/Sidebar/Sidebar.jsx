import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="">
                <Link to="/" href="index.html">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                  <i className="fe fe-user"></i> <span>Users</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default Sidebar;
