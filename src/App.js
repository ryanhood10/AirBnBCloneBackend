import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]); // State to hold your data

  useEffect(() => {
    // Make a GET request to fetch the data
    fetch('http://localhost:3001/api/data') // Adjust the URL if necessary
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set the fetched data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

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
