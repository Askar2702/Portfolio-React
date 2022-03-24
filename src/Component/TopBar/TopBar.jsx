import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius
          </a>

          <div className="itemContainer">
            <Person className="icon" />
            <span>+7 700 265 47 20</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>askar270296@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
