import React, { useState } from "react";
import Logo from "../../assets/rct-logo.png";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.scss";
import AudioPlayer from "react-h5-audio-player";
import { strings } from "../../utils/strings";
import { useNavigate } from "react-router";
import { routerPaths } from "../../utils/routerPaths";



const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e);
  };

  return (
    <>
      <div className="header">
        <img src={Logo} className="logoImage" alt="Website logo" />
        <div>
          <AudioPlayer
            autoPlay={false}
            src="http://rct.unitbv.ro:8000/;?type=http&nocache=38687"
            showSkipControls={false}
            showJumpControls={false}
            volume={0.5}
            loop={false}
            className="audioPlayer-header"
            layout={"horizontal"}
          />
        </div>

        <div className="menu-left-side">
          <div className="menu-buttons-section">
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              {strings.header.menuItems.homeButton}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
              onClick={()=>navigate(routerPaths.blog)}
            >
              {strings.header.menuItems.blogButton}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              {strings.header.menuItems.scheduleButton}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              {strings.header.menuItems.contactButton}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              {strings.header.menuItems.aboutUsButton}
            </Button>
          </div>

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
              {strings.header.menuItems.homeButton}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {strings.header.menuItems.blogButton}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {strings.header.menuItems.scheduleButton}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {strings.header.menuItems.contactButton}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {strings.header.menuItems.aboutUsButton}
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
