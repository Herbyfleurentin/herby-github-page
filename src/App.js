import './App.css';
import { NavBar } from './composants/NavBar.js'; 
import { Banner } from './composants/Banner.js';
import { Skills } from './composants/Skills.js';
import { Projects } from './composants/Projects.js';
import { BackToTop } from './composants/BackToTop.js';
import { Footer } from './composants/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default App;
