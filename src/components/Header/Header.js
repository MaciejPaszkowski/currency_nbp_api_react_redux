import React, { useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";

import "./Header.scss";
import logo from "../../images/logo_exchange.png";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const menuToggle = () => {
    setOpened(!opened);
  };

  const styles = {
    bar1: {
      transform: opened && "rotate(-45deg) translate(-11px, 11px)",
    },
    bar2: {
      opacity: opened && 0,
    },
    bar3: {
      transform: opened && "rotate(45deg) translate(-11px, -11px)",
    },
  };

  return (
    <header className="header">
      <div className="header__container">
        <Logo image={logo} text="Currencies" />
        <Menu opened={opened} closeMenu={menuToggle} />
        <div className="header__hamburger" onClick={menuToggle}>
          <div className="header__bar1" style={styles.bar1}></div>
          <div className="header__bar2" style={styles.bar2}></div>
          <div className="header__bar3" style={styles.bar3}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
