import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoStarbucks from "../../assets/images/logo-starbucks.png"
import menuIcon from "../../assets/images/menu.png";
import menuCloseIcon from "../../assets/images/menu-close.png";
import { HeaderContainer, Ul } from "./style";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <nav>
      <img src={logoStarbucks} alt="Logomarca Starbucks" />
      <Ul $isMenuOpen={isMenuOpen}>
            <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          </li>
          <li>
            <Link to="/novidades" onClick={() => setIsMenuOpen(false)}>Novidades</Link>
          </li>
          <li>
            <Link to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </li>
        </Ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? menuCloseIcon : menuIcon}
            alt={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          />
        </div>
      </nav>
    </HeaderContainer>
  );
}