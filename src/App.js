import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home.js';
import Devis from './Pages/Devis/devis.js'
function App() {
  return (
    <div className="App">
    	<Devis/>
    </div>
  );
}

export default App;
