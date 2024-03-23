import React, { useState } from 'react';
import './Sidebar.scss';
import profilepic from "../../assets/aleksandr.jpg"
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileView = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='sidebar'>
      <div className="profile-circle">
        <img src={profilepic} alt="Profile" />
      </div>
      <div className='buttons'>
      <button className='newChat'><FaPlus /></button>
      <div className='seperator'></div>
      <button className="logout-btn">Logout</button>
      </div>

    </div>
  );
};

export default Sidebar;
