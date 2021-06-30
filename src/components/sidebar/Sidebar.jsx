import "./sidebar.css";
import {
  PermIdentity,
  LocationCity,
  Schedule,
  AccountBalanceRounded,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                < PermIdentity className="sidebarIcon" />
                Aplikantet
              </li>
            </Link>
            
            <Link to="/DepartamentList" className="link">
              <li className="sidebarListItem">
                < AccountBalanceRounded className="sidebarIcon" />
                Departamenti
              </li>
            </Link>
            <Link to="/OrariList" className="link">
              <li className="sidebarListItem">
                < Schedule className="sidebarIcon" />
                Orari
              </li>
            </Link>
            <Link to="/DegaList" className="link">
              <li className="sidebarListItem">
                < LocationCity className="sidebarIcon" />
                Dega
              </li>
            </Link>
            <Link to="/VitiList" className="link">
              <li className="sidebarListItem">
                < School className="sidebarIcon" />
                Viti Akademik
              </li>
            </Link>
          </ul>
        </div>

        </div>
      </div>
    
  );
}
