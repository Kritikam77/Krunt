import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";

const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="header">
      <div className="header-title">
        KRUNT
      </div>
      <Link to="/" onClick={() => setTab("/")}>
        {tab === "/" ? (
          <Home style={{ color: "white" }} />
        ) : (
          <HomeOutlined style={{ color: "grey" }} />
        )}
      </Link>

      <Link to="/newpost" onClick={() => setTab("/newpost")}>
        {tab === "/newpost" ? (
          <Add style={{ color: "white" }} />
        ) : (
          <AddOutlined style={{ color: "grey" }} />
        )}
      </Link>

      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "white" }} />
        ) : (
          <SearchOutlined style={{ color: "grey" }} />
        )}
      </Link>

      <Link to="/account" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <AccountCircle style={{ color: "white" }} />
        ) : (
          <AccountCircleOutlined style={{ color: "grey" }} />
        )}
      </Link>
    </div>
  );
};

export default Header;
