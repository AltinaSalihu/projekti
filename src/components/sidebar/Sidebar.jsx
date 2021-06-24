import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  InsertChartOutlined,
  InsertDriveFile,
  FolderSharedOutlined,
  Group,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { FormControl } from "@material-ui/core";

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
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                < FolderSharedOutlined className="sidebarIcon" />
                Te regjistruarit
              </li>
            </Link>
            <Link to="/newProduct" className="link">
              <li className="sidebarListItem">
                < Group className="sidebarIcon" />
                Staff
              </li>
            </Link>
          </ul>
        </div>

        </div>
      </div>
    
  );
}
