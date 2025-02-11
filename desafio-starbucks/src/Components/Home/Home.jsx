import React, { useState } from "react";
import smallOrangeCup from "../../assets/images/small-orange-cup.png";
import smallYellowCup from "../../assets/images/small-yellow-cup.png";
import smallRedCup from "../../assets/images/small-red-cup.png";
import largeOrangeCup from "../../assets/images/large-orange-cup.png";
import largeYellowCup from "../../assets/images/large-yellow-cup.png";
import largeRedCup from "../../assets/images/large-red-cup.png";
import facebookIcon from "../../assets/images/facebook-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";
import { MainContainer, Circle, Content, TextBox, ImgBox, ThumbnailList, SocialIconsList } from "./style";

export default function Home() {
  const [currentCup, setCurrentCup] = useState({
    cup: largeOrangeCup,
    ellipseColor: "#017143",
  });

  const handleCupClick = (color) => {
    const cupMap = {
      orange: { cup: largeOrangeCup, ellipseColor: "#037143" },
      yellow: { cup: largeYellowCup, ellipseColor: "#DECD13" },
      red: { cup: largeRedCup, ellipseColor: "#97090C" },
    };
    setCurrentCup(cupMap[color]);
  };

  return (
    <MainContainer>
      <Circle $backgroundColor={currentCup.ellipseColor} />
      <Content>
        <TextBox>
          <h2>Mais que café</h2> 
            <h2>Isso é <span>Starbucks</span>
          </h2>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
            quentes e frias, doces diferenciados e sanduíches.
          </p>
          <a href="#" aria-label="Saiba mais sobre a Starbucks">
            SAIBA MAIS
          </a>
        </TextBox>

        <ImgBox>
          <img
            src={currentCup.cup}
            alt="Copo de café grande"
          />
        </ImgBox>
      </Content>

      <ThumbnailList>
        <li>
          <img
            src={smallOrangeCup}
            alt="Copo pequeno laranja"
            onClick={() => handleCupClick("orange")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleCupClick("orange")}
          />
        </li>
        <li>
          <img
            src={smallYellowCup}
            alt="Copo pequeno amarelo"
            onClick={() => handleCupClick("yellow")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleCupClick("yellow")}
          />
        </li>
        <li>
          <img
            src={smallRedCup}
            alt="Copo pequeno vermelho"
            onClick={() => handleCupClick("red")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleCupClick("red")}
          />
        </li>
      </ThumbnailList>

      <SocialIconsList>
        <li>
          <a href="#" aria-label="Visite nosso Facebook">
            <img src={facebookIcon} alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Visite nosso Twitter">
            <img src={twitterIcon} alt="Ícone do Twitter" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Visite nosso Instagram">
            <img src={instagramIcon} alt="Ícone do Instagram" />
          </a>
        </li>
      </SocialIconsList>
    </MainContainer>
  );
}