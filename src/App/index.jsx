import React from 'react';
import About from './pages/About';

import Home from './pages/Home';
import Works from './pages/Works';
import PlatonCs from './pages/Client/Platon';
import SolaneCs from './pages/Client/Solane';
import SedalCs from './pages/Client/Sedal';
import Navbar from './components/Navbar';
import Style from '../Assets/style/index.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';

  const App = () => {

    return (
      <div>
      
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />}> 
              <Route path="platon-study-case" element={<PlatonCs />} />
              <Route path="solane-study-case" element={<SolaneCs />} />
              <Route path="sedal-study-case" element={<SedalCs />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      </div>

      
      
    );
  }

  export default App;