import React from "react";
import './Header.css'

const Header = ({user}) => {
  return (
    <div className="header-wrapper">
        <div className="user-wrapper">
            <img src={user.img} alt={`${user.name} image`} className="logged-in-user"></img>
            <div>{user.name}</div>
        </div>
    </div>
  );
};

export default Header;
