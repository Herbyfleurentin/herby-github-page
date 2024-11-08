import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "Bonjour, je m'appelle Herby Fleurentin", 
    "je suis cartographe",
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
        setText((prevText) => prevText + phrases[currentIndex][i]); // Ajouter un caractère
        i += 1;
        if (i === phrases[currentIndex].length) {
          clearInterval(textInterval); // Arrêter l'affichage lorsque la phrase est complète
          if (currentIndex === 0) {
            // Si c'est la première phrase, on passe à la suivante sans effacer
            setTimeout(() => {
              setCurrentIndex(1); // Passer à la phrase suivante après une pause
            }, 1000); // Attendre 1 seconde avant de passer à la phrase suivante
          } else {
            // Si ce n'est pas la première phrase, commencer à effacer après une pause
            setTimeout(() => {
              eraseText(); // Effacer la phrase actuelle
            }, 1000); // Attendre 1 seconde avant de commencer à effacer
          }
        }
      }, 100); // délai de 100ms entre chaque caractère
    };

    // Fonction pour effacer le texte
    const eraseText = () => {
      eraseInterval = setInterval(() => {
        setText((prevText) => prevText.slice(0, -1)); // Enlever le dernier caractère
        if (text === phrases[0]) {
          clearInterval(eraseInterval); // Arrêter l'effacement lorsque la première phrase est complète
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Passer à la phrase suivante
          setTimeout(() => {
            showText(); // Réafficher la prochaine phrase après une pause
          }, 500); // Attendre 0.5 seconde avant de commencer à écrire la prochaine phrase
        }
      }, 50); // délai pour effacer un caractère
    };

    // Initialisation : afficher la première phrase
    if (currentIndex === 0) {
      showText();
    } else {
      setText(phrases[0]); // La première phrase reste affichée
      showText(); // Démarrer l'animation des phrases suivantes
    }

    return () => {
      clearInterval(textInterval); // Nettoyer les intervalles lorsque le composant est démonté
      clearInterval(eraseInterval);
    };
  }, [currentIndex]); // Recommencer l'animation quand l'index de la phrase change

  return (
    <div className="App">
      <h1>{text}</h1> {/* Afficher le texte à l'écran */}
    </div>
  );
}

export default App;
