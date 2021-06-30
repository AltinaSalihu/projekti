import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img src="http://sa.ubt-uni.net/sabfi17/wp-content/uploads/2015/04/Untitled-2.png" alt="" className="topIcon"  />
          
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
           
          </div>
          <div className="topbarIconContainer">
           
          </div>
          <div className="topbarIconContainer">
           
          </div>
         
        </div>
      </div>
    </div>
  );
}
