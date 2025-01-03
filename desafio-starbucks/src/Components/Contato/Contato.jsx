import React from "react";
import { Section, Form } from "./style";

export default function Contato() {
  return (
    <Section>
      <h1>Contato</h1>
      <Form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Seu nome" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Seu email" />

        <textarea placeholder="Sua mensagem"></textarea>

        <button type="submit">Enviar</button>
      </Form>
    </Section>
  );
}
