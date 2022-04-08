import "./header.scss";
import AutofpsSelectIcon from "@mui/icons-material/AutofpsSelect";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="logo">
          <AutofpsSelectIcon />
        </div>
        <div className="user">
          <div className="lang-switcher"></div>
          <div className="login-btn"></div>
        </div>
      </div>
    </div>
  );
};
