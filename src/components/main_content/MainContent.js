import "./MainContent.css";
import logo from '../../images/logo.svg';


export default function MainContent() {
    return (
      <div className="container">
        <h1 className="main--title">Fun facts about React</h1>
        <ul className="main--list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img className="main--logo_bg" src={logo} alt="" />
      </div>
    );
  }