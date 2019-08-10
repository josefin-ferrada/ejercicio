import React from 'react';
import './App.css';
import Header from './Components/header'
import Current from './Components/current';
import LastMonth from './Components/lastMonth';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="boxes">
        <Current/>
      </section>
      <section className="boxes">
        <LastMonth/>
      </section>
    </div>
  );
}

export default App;
