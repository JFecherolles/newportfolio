
import './App.css';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Projets from '../src/components/Projets/Projets';
import About from '../src/components/About/About';
import Skills from '../src/components/Skills/Skills';

function App() {


  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <Projets />
        <Skills />
        <About />

      </div>

    </>
  )
}

export default App
