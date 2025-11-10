import logo from "url:../assets/rest-logo.png";
import {
  faHouse,
  faShoppingCart,
  faUser,
  faHeadset,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const HeaderComp = () => {
  const [loginState, setLoginState] = useState("Login");

  const changeLoginState = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };

  return (
    <header className="Header">
      <div className="logoContainer">
        <img
          className="logo"
          src={logo}
          style={{ width: "100px" }}
          alt="logo"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li title="home" tabIndex={0}>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </li>
          <li title="about" tabIndex={0}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>About</span>
          </li>
          <li title="contact us" tabIndex={0}>
            <FontAwesomeIcon icon={faHeadset} />
            <span>Contact Us</span>
          </li>
          <li title="cart" tabIndex={0}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart</span>
          </li>
          <li title="login" tabIndex={0} onClick={changeLoginState}>
            <FontAwesomeIcon icon={faUser} />
            <span>{loginState}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComp;
