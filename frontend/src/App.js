import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Import base/app-wide UI components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'

//Import profile-related components
import LogIn from './components/profile/LogIn'
import ProfileDetail from './components/profile/ProfileDetail'
import Register from './components/profile/Register'

//Import Store-related components
import Cart from './components/store/Cart'
import CategoryList from './components/store/CategoryList'
import CategoryDetail from './components/store/CategoryDetail'
import Order from './components/store/Order'
import OrderList from './components/store/OrderList'
import ProductDetail from './components/store/ProductDetail'


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
