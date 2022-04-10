import "./Header.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="header-container">
          <h3 className="user-panel--logo"> Добро пожаловать</h3>
          <div className="header-user">
            <div className="header-user-item">English</div>
            <KeyboardArrowDownIcon style={{ color: "white" }} />
            <div className="header-divider"></div>
            <div className="header-user-item">Login</div>
          </div>
        </div>
      </section>
    </header>
  );
};
