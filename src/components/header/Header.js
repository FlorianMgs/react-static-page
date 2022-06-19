import logo from '../../images/logo.svg';
import './Header.css';


export default function Header() {
    return (
      <div className="header">
        <nav>
          <div className="header--title_logo">
            <img src={logo} className="header--logo" alt="logo" />
            <h1 className="header--title">ReactFacts</h1>
          </div>
          <p className="header--intro">React Course - Project 1</p>
        </nav>
      </div>
    );
  }