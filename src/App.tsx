import React from 'react';
import './App.css';
import Header from './Header';

const App = () => {
  return (
    <>
    <Header />
    <div className="App">
      <p>Statium will be back soon.</p>
      <p>
        In the meantime, read <a href="https://blog.statium.io">our blog</a>.
      </p>
    </div>
    </>
  );
};

export default App;
