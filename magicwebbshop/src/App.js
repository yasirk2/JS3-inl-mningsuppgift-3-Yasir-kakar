import './App.css';
import ParentPrevs from './parent/Parent';
import MagickShop from './MagickShop';
import React from 'react';
import Provider from './context/Provider';

function App() {
  return (
    <>
      <Provider>
        <MagickShop/>
      </Provider>
      
    </>
  );
}

export default App;
