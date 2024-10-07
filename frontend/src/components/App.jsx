import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Other components */}
    </BrowserRouter>
  );
}

export default App;
