import React from 'react';
import MoviesBuilder from './container/MoviesBuilder'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies Database Manager</h1>
      </header>
      <main>
        <MoviesBuilder />
      </main>
    </div>
  );
}

export default App;
