import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Te dhenat personale</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
           
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Te dhenat personale</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Altina Salihu</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">16.06.20001</span>
            </div>
            <span className="userShowTitle">Te dhenat kontaktuse</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">altinasalihu@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Gjilan | Kosova</span>
            </div>
          </div>
        </div>  
              </div>
            </div>
            
        
  );
}
