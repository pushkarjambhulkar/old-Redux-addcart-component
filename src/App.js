import React from 'react';

import './App.css';
//import Home from './Components/home';
import HomeContainer from '../src/Container/HomeContainer'
import HeaderContainer from './Container/HeaderContainer';
function App() {
  
  return (
    <div className="App">
      <HeaderContainer/>
        <HomeContainer/>
    </div>
  );
}

export default App;
