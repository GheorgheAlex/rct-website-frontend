import React, { useState } from "react";
import Logo from "../utils/rct-logo.png";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import strings from "../config/strings";
import "./Header.scss";

const { general: generalStrings } = strings;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e);
  };

  const handleSearchClick = () => {
    console.log("Add search functionality: modal smth smth");
  };
  return (
    <>
      <div className="header">
        <img src={Logo} className="logoImage" alt="Website logo" />
        <div className="menu-left-side">
          <div className="menu-buttons-section">
            <Button variant="contained" className="menu-button">
              {generalStrings.header.menuButtons.home}
            </Button>
            <Button variant="contained" className="menu-button">
              {generalStrings.header.menuButtons.news}
            </Button>
            <Button variant="contained" className="menu-button">
              {generalStrings.header.menuButtons.schedule}
            </Button>
            <Button variant="contained" className="menu-button">
              {generalStrings.header.menuButtons.news}
            </Button>
            <Button variant="contained" className="menu-button">
              {generalStrings.header.menuButtons.aboutUs}
            </Button>
          </div>

          <Button>
            {<SearchIcon className="search-icon" onClick={handleSearchClick} />}
          </Button>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="hamburger-menu-icon"
          >
            {<MenuIcon fontSize="large" />}
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {generalStrings.header.menuButtons.home}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {generalStrings.header.menuButtons.news}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {generalStrings.header.menuButtons.schedule}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {generalStrings.header.menuButtons.contact}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {generalStrings.header.menuButtons.aboutUs}
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;