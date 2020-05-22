import React from 'react';
import Search from './Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Forkify in React.
      </header>
      <section className="Search-section">
        <Search onSubmit={onSearchSubmit} />
      </section>
      <section>
        <p>This paragraph is in the first section.</p>
      </section>
      <section>
        <p>And this paragraph and the next</p>
        <p>are in the second section.</p>
      </section>
    </div>
  );
}

export default App;

function onSearchSubmit(query) {
  console.log(query);
}