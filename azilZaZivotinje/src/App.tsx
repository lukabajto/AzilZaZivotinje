import { useEffect, useState } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Info from "./components/Info.tsx"
import Popis from './components/Popis.tsx';
import UnosForma from './components/UnosForma.tsx';
import Obavijesti from './components/Obavijesti.tsx';

function App() {
  useEffect(() => {
    
    M.AutoInit();
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);
  const [displayGeneral, setDisplayGeneral] = useState(true);
  const [displayPopis, setPopis] = useState(false)
  const [displayUnos, setUnos] = useState(false)
  const [displayObavijesti, setObavijesti] = useState(false)

  const handleInfoClick = () => {
    setDisplayGeneral(true);
    setPopis(false);
    setUnos(false);
    setObavijesti(false);
  };

  const handlePopisClick = () => {
    setDisplayGeneral(false);
    setPopis(true);
    setUnos(false);
    setObavijesti(false);
  };

  const handleUnosClick = () => {
    setUnos(true);
    setDisplayGeneral(false);
    setPopis(false);
    setObavijesti(false);
  }

  const handleObavijestiClick = () => {
    setObavijesti(true);
    setDisplayGeneral(false);
    setPopis(false);
    setUnos(false);
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
            <li><a href="#" onClick={handleObavijestiClick}>Obavijesti</a></li>
            <li><a href="#" onClick={handleUnosClick}>Unos</a></li>
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
      {displayPopis && <Popis isAdmin={isAdmin} />}
      {displayUnos && !isAdmin && <h4>Trebate biti admin za otključati unos.</h4>}
      {displayUnos && isAdmin && <UnosForma />}
      {displayObavijesti && <Obavijesti isAdmin={isAdmin}/>}
      
    </>
  );
}

export default App;
