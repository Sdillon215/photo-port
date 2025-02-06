import React from 'react';
import About from './components/About';
import Nav from './components/About/Nav';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
