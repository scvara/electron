import "./header.scss";
import AutofpsSelectIcon from "@mui/icons-material/AutofpsSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="logo">
          <AutofpsSelectIcon fontSize="large" color="action" />
        </div>
        <div className="user-section">
          <div className="header-user-item">English</div>
          <KeyboardArrowDownIcon style={{ color: "white" }} />
          <div className="header-divider"></div>
          <div className="header-user-item">Login</div>
        </div>
      </div>
    </div>
  );
};
