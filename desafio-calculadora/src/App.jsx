import { useState } from "react";
import "./App.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(null);
  const [segundoValor, setSegundoValor] = useState(null);
  const [resultado, setResultado] = useState(null);

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(e.target.value === '' ? null : Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(e.target.value === '' ? null : Number(e.target.value));
  };

  const soma = () => {
    setResultado((primeiroValor || 0) + (segundoValor || 0));
  };

  const subtracao = () => {
    setResultado((primeiroValor || 0) - (segundoValor || 0));
  };

  const multiplicacao = () => {
    setResultado((primeiroValor || 0) * (segundoValor || 0));
  };

  const divisao = () => {
    if (segundoValor === 0) {
      setResultado("Erro: Divisão por zero");
    } else {
      setResultado(primeiroValor / segundoValor);
    }
  };

  const limpar = () => {
    setPrimeiroValor(null);
    setSegundoValor(null);
    setResultado(null);
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="input-section">
        <input
          type="number"
          placeholder="Insira o primeiro número"
          value={primeiroValor !== null ? primeiroValor : ''}
          onChange={capturandoPrimeiroValor}
        />
        <input
          type="number"
          placeholder="Insira o segundo número"
          value={segundoValor !== null ? segundoValor : ''}
          onChange={capturandoSegundoValor}
        />
      </div>
      <div className="button-section">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>*</button>
        <button onClick={divisao}>/</button>
        <button className="clear-button" onClick={limpar}>Limpar</button>
      </div>
      <h3>Resultado: {resultado !== null ? resultado : "Nenhum cálculo ainda"}</h3>
    </div>
  );
}
