import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route className='home' exact path={'/'} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
