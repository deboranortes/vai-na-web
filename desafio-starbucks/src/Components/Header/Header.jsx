import { Link } from "react-router-dom";
import logoStarbucks from "../../assets/images/logo-starbucks.png"
import { HeaderContainer, Ul } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <nav>
      <img src={logoStarbucks} alt="Logomarca Starbucks" />
        <Ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/novidades">Novidades</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
        </Ul>
      </nav>
    </HeaderContainer>
  );
}
