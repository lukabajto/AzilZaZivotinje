import { useEffect, useState } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Info from "./components/Info.tsx"
import Popis from './components/Popis.tsx';
import UnosForma from './components/UnosForma.tsx';


function App() {
  useEffect(() => {
    // Initialize MaterializeCSS dropdown and sidenav components
    M.AutoInit();
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);
  const [displayGeneral, setDisplayGeneral] = useState(false);
  const [displayPopis, setPopis] = useState(false)

  const handleInfoClick = () => {
    setDisplayGeneral(true);
    setPopis(false);
  };

  const handlePopisClick = () => {
    setDisplayGeneral(false);
    setPopis(true);
  };

  const handleSwitch = () => {
    setIsAdmin(!isAdmin);
    console.log(isAdmin)
  };


  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">Azil</a>
          <ul className="nav-links">
            <li><a href="#" onClick={handleInfoClick}>Podaci</a></li>
            <li><a href="#" onClick={handlePopisClick}>Popis</a></li>
            <li><a href="#">Donacije</a></li>
            <li><a href="#">Obavijesti</a></li>
            <li><a href="#">Unos</a></li>
          </ul>
          <div className="switch">
            <p className='switchText'>User</p>
            <label className="switch">
              <input type="checkbox" onChange={handleSwitch} />
              <span className="slider round"></span>
            </label>
            <p className='switchText'>Admin</p>
          </div>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
      <br></br>
      {displayGeneral && <Info />}
      {displayPopis && <Popis />}
      
    </>
  );
}

export default App;
