import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is cloud hosting my small, JSON database for my Airbnb application
        </p>
        <div className="data-list">
          {data.map((item, index) => (
            <div key={index} className="data-item">
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Rating: {item.star}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Application
        </a>
      </header>
    </div>
  );
}

export default App;
