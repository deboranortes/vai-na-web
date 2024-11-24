import { useState } from "react";
import { MainStyle, Cup, Section } from "./style";

// Imports das imagens existentes
import smallOrangeCup from "../../assets/images/small-orange-cup.png";
import smallRedCup from "../../assets/images/small-red-cup.png";
import smallYellowCup from "../../assets/images/small-yellow-cup.png";

import largeOrangeCup from "../../assets/images/large-orange-cup.png";
import largeRedCup from "../../assets/images/large-red-cup.png";
import largeYellowCup from "../../assets/images/large-yellow-cup.png";

import greenEllipse from "../../assets/images/green-ellipse.png";
import redEllipse from "../../assets/images/red-ellipse.png";
import yellowEllipse from "../../assets/images/yellow-ellipse.png";

// Imports dos ícones de redes sociais
import facebookIcon from "../../assets/images/facebook-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

export default function Home() {
    const [currentCup, setCurrentCup] = useState({
        cup: largeOrangeCup,
        ellipse: greenEllipse,
    });

    const handleCupClick = (color) => {
        const cupMap = {
            orange: { cup: largeOrangeCup, ellipse: greenEllipse },
            red: { cup: largeRedCup, ellipse: redEllipse },
            yellow: { cup: largeYellowCup, ellipse: yellowEllipse },
        };

        setCurrentCup(cupMap[color]);
    };

    return (
        <MainStyle>
            <section>
                <h2>Mais que Café</h2>
                <h2>
                    Isso é <span> Starbucks</span>
                </h2>
                <p>
                    A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
                    dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
                    Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
                    bebidas quentes e frias, doces diferenciados e sanduíches.
                </p>
                <button>SAIBA MAIS</button>
                <div>
                    <img
                        src={smallOrangeCup}
                        alt="copo laranja pequeno"
                        onClick={() => handleCupClick("orange")}
                    />
                    <img
                        src={smallRedCup}
                        alt="copo vermelho pequeno"
                        onClick={() => handleCupClick("red")}
                    />
                    <img
                        src={smallYellowCup}
                        alt="copo amarelo pequeno"
                        onClick={() => handleCupClick("yellow")}
                    />
                </div>
            </section>
            <Section>
                <Cup
                src={currentCup.cup} alt="copo grande" />
                <img src={currentCup.ellipse} alt="elipse colorida" />
                {/* Adicionando os ícones de redes sociais */}
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Ícone do Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Ícone do Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Ícone do Instagram" />
                    </a>
                </div>
            </Section>
        </MainStyle>
    );
}
