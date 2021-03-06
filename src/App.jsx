import './sass/app.scss';

import TopBar from './components/Topbar/Topbar';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';

import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Welcome />
        <About />
      </div>
    </div>
  );
}

export default App;
