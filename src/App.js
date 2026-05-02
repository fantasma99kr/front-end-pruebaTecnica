import logo from './img/logo.png';
import { useState } from 'react';
import './css/App.css';

import Aeropuerto from './aeropuerto';
import Stack from './stackusers';

function App() {

  const [ComponenteSeleccionado, setComponenteSeleccionado] = useState(() => Aeropuerto);

  return (
    <div>
      {/* Menu navegacion */}
      <nav>
        <div class="nav-option">
          <img src={logo} class="logo-nav" alt=''/>
          <span>
            Reto Técnico FullStack
          </span>
        </div>
        <div class="nav-option dropdown">
            <span>☰</span>
            <div class="dropdown-content">
              <button class="drop-option" onClick={() => setComponenteSeleccionado(() => Aeropuerto)}>✈ Aeropuerto</button>
              <button class="drop-option" onClick={() => setComponenteSeleccionado(() => Stack)}>☰ StackOverflow</button>
            </div>
        </div>
      </nav>
      <main class="container">
        <ComponenteSeleccionado/>
      </main>
    </div>
  );
}

export default App;
