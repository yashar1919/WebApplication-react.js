import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;