import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.log(error));
  };

  const handleClick = () => {
    getQuote();
  };

  const hStyle = {
    fontSize: '45px',
    textAlign: 'center',

  };
  const bStyle = {
    fontSize: '50px',
    textAlign: 'center',
    bordeRadius: '5px',
    margin: '10px',

  };
  

  return (
    <div className='bd'>
      <h1 style={hStyle}>Quote Generator</h1>
      <center>
      <div className='q'>
        <p>{quote}</p>
        <h3>- {author}</h3>
      </div>
      </center>
      <div style={bStyle}>
        <button onClick={handleClick}>New</button>
      </div>
    </div>
  );
}

export default App;