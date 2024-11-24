import { Link } from "react-router-dom";
import { HeaderStyle, Ul } from "./style";

export default function Header() {
    return (
        <HeaderStyle>
            <img
                src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/logo.png?raw=true"
                alt="logomarca"
            />
            <nav>
                <Ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </Ul>
            </nav>
        </HeaderStyle>
    );
}