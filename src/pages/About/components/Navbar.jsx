import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");
  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <div className="nav">
      <Link className="nav_title" to="/">
        지진알리미
      </Link>
      <Link
        className={`${"nav_item"} ${
          selectedItem === "/team" ? "nav_item_select" : ""
        }`}
        to="/team"
      >
        팀원 소개
      </Link>
      <Link
        className={`${"nav_item"} ${
          selectedItem === "/proposal" ? "nav_item_select" : ""
        }`}
        to="/proposal"
      >
        기획서
      </Link>
      <Link
        className={`${"nav_item"} ${
          selectedItem === "/link" ? "nav_item_select" : ""
        }`}
        to="/link"
      >
        링크
      </Link>
    </div>
  );
};

export default Navbar;
