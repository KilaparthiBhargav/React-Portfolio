
import './App.css';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';
import { Header } from './Componants/Header';
import Home from './Componants/Home';
import Projects from './Componants/Projects';
import Resume from './Componants/Resume';

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
