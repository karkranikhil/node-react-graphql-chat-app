import React from "react";
import './Sidebar.css'
import Userlist from '../userlist/Userlist'
const Sidebar = ({userListDetail}) => {
  return (
    <div className="sidebar">
        <Userlist userListDetail={userListDetail}/>
    </div>
  );
};

export default Sidebar;
