import React from "react";
import { Section, Div } from "./style";
import storeImage from "../../assets/images/loja.png";

export default function Menu() {
  return (
    <Section>
      <img src={storeImage} alt="Fachada da loja Starbucks" />
      <Div>
        <h3>PREPARAÇÃO</h3>
        <h2>Níveis de torra</h2>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </p>
        <a href="#" aria-label="Saiba mais sobre a Starbucks">
          SAIBA MAIS
        </a>
      </Div>
    </Section>
  );
}
