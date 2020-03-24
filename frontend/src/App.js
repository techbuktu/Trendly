import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Import base/app-wide UI components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'

//Import profile-related components

//Import Store-related components



function App() {
  return (
    <Router>
      
        <div className="App">
          <header className="App-header">
            <Header /> 
          </header>
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
