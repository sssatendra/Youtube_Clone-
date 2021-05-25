import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css"

import { Link } from "react-router-dom";

function Header() {

  const [search, setSearch ] = useState('');
 

  return (
    <div className="header">
      <div className="header__left">
          <IconButton>
          <MenuIcon />
          </IconButton>
          
        <img
          className="header__logo"
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          alt="Youtube Icon"
        />
      </div>
      <div className="header__mid">
        <input value={search} onChange={(e)=>{
            setSearch(e.target.value);
        }} type="text" />
        <Link to={`/search/${search}`}>
        <SearchIcon className="header__input" />
        </Link>
        
      </div>
      <div className="header__right">
          <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          
        <Avatar className="header__icon"
          src="https://i.pinimg.com/originals/93/ad/5a/93ad5a693fd83bdfd4f134810c8338c1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
