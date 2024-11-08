import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const fullText = "Bonjour, je m'appelle Herby Fleurentin, je suis cartographe et géomaticien.";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + fullText[i]);
      i += 1;
      if (i === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // délai de 100ms entre chaque lettre
    return () => clearInterval(intervalId); // nettoyer l'intervalle quand le composant est démonté
  }, []);

  return (
    <div className="App">
      <h1>{text}</h1>
    </div>
  );
}

export default App;
