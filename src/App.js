// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  
  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  }

  return (
    <div className="App">
      <h1>Responsive Parahgraph Word Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default App;
