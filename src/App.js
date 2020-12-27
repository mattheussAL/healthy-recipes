import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import ServicesPage from './pages/ServicesPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch><Route path='/' exact component={HomePage}></Route></Switch>
      <Switch><Route path='/recipes' component={RecipesPage}></Route></Switch>
      <Switch><Route path='/services' component={ServicesPage}></Route></Switch>
      <Switch><Route path='/join' component={JoinPage}></Route></Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
