import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Novidades from "./Components/Novidades/Novidades";
import Contato from "./Components/Contato/Contato";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
