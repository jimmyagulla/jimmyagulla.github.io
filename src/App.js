import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/Navbar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Services } from './components/Services/Services';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { PMG } from './components/PMG/PMG';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Services />
      {/* <Projects /> */}
      <PMG />
      <Contact />
    </div>
  );
}

export default App;
