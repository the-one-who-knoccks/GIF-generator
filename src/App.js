import React from 'react';

import Random from './Components/Random_V2';
import Tag from './Components/Tag_V2';

import './App.css';


const App = () => (
  <div>
    <h1>Random GIF Application</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
