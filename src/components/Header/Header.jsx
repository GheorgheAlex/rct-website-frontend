import React, { useState } from "react";
import Logo from "../../utils/rct-logo.png";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import strings from "../../config/strings";
import "./Header.scss";
import AudioPlayer from "react-h5-audio-player";

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
              Acasă
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              Blog
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              Program emisiuni
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              Contact
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="menu-button"
            >
              Despre noi
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
              Acasă
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              Blog
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              Program emisiuni
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              Contact
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              Despre noi
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
