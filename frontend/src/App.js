/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';



function App() {
  return (
    <Router>
      <div className="container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              HADAYA هدايا
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserve HADAYA 2021</footer>
      </div>
    </Router>
  );
}

export default App;
