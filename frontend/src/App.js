import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
        </div>
    </Router>
  );
}

export default App;
