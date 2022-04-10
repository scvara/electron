import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AutofpsSelectIcon from "@mui/icons-material/AutofpsSelect";

import { Search } from "../Search/Search";
import "../UserPanel/UserPanel.scss";

export const UserPanel = () => {
  return (
    <section>
      <div className="container">
        <AutofpsSelectIcon fontSize="large" style={{ color: "black" }} />
        <span className="user-panel--item">
          <Search />
        </span>
        <span>
          <span className="user-panel--icon">
            <LocalMallOutlinedIcon />
          </span>
          <span className="user-panel--icon">
            <NotificationsOutlinedIcon />
          </span>
          <span className="user-panel--icon">
            <PersonOutlineOutlinedIcon />
          </span>
        </span>
      </div>
    </section>
  );
};
