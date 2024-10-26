import { useState } from 'react';
import './app.scss';
import lampada from './assets/lampada.png';
import genioLampada from './assets/genio-lampada.png';
import magicSound from './assets/magic-sound.mp3';

function App() {
  const [isGenioVisible, setIsGenioVisible] = useState(false);

  const handleButtonClick = () => {
    const audio = new Audio(magicSound);
    audio.play(); // Toca o som
    setIsGenioVisible(!isGenioVisible);
  };

  return (
    <main>
      <h1>Libere a magia da programação com a lâmpada de Aladim.</h1>
      <div className="lampada-container">
        {!isGenioVisible && <img src={lampada} alt="Lâmpada" className="lampada" />}
        {isGenioVisible && <img src={genioLampada} alt="Gênio da Lâmpada" className="genio" />}
      </div>
      <button onClick={handleButtonClick} className="button">
        Clique Aqui
      </button>
    </main>
  );
}

export default App;
