import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "Bonjour, je m'appelle Herby Fleurentin, je suis cartographe",
    "Je suis géomaticien",
    "Je suis ingénieur civil"
  ];

  useEffect(() => {
    let i = 0;
    let textInterval;
    let eraseInterval;

    // Fonction pour afficher le texte
    const showText = () => {
      textInterval = setInterval(() => {
        setText((prevText) => prevText + phrases[currentIndex][i]);
        i += 1;
        if (i === phrases[currentIndex].length) {
          clearInterval(textInterval);
          // Si ce n'est pas la première phrase, commencer à effacer après une pause
          if (currentIndex !== 0) {
            setTimeout(() => {
              eraseText();
            }, 1000); // Attendre 1 seconde avant de commencer à effacer
          } else {
            // Si c'est la première phrase, ne pas effacer et passer à la suivante
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Passer à la phrase suivante
            }, 1000); // Attendre 1 seconde avant de passer à la phrase suivante
          }
        }
      }, 100); // délai de 100ms entre chaque lettre
    };

    // Fonction pour effacer le texte
    const eraseText = () => {
      eraseInterval = setInterval(() => {
        setText((prevText) => prevText.slice(0, -1)); // Enlever le dernier caractère
        if (text.length === 0) {
          clearInterval(eraseInterval);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Passer à la phrase suivante
          setTimeout(() => {
            showText(); // Réafficher le texte suivant
          }, 500); // Attendre 0.5 seconde avant de commencer à écrire la prochaine phrase
        }
      }, 50); // délai pour effacer un caractère
    };

    showText(); // Démarrer l'animation de texte

    return () => {
      clearInterval(textInterval);
      clearInterval(eraseInterval);
    };
  }, [currentIndex, text.length]);

  return (
    <div className="App">
      <h1>{text}</h1>
    </div>
  );
}

export default App;
