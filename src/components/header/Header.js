import Switch from "react-switch";
import logo from '../../images/logo.svg';
import './Header.css';


export default function Header(props) {
    return (
      <div className="header">
        <nav>
          <div className="header--title_logo">
            <img src={logo} className="header--logo" alt="logo" />
            <h1 className="header--title">ReactFacts</h1>
          </div>
          <div className="header--switch">
            <p>Switch Dark Mode</p>
            <Switch 
              onChange={props.handleChange}
              value={props.isDarkmode}
              checked={props.isDarkmode}
            />
          </div>
        </nav>
      </div>
    );
  }