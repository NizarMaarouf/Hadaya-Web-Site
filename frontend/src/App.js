/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router , Route , Link} from "react-router-dom";
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';


function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <Router>
      <div className="container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              HADAYA هدايا
            </Link>
          </div>
          <div>
            {/* To show the popup number of choice carts */}
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center">
          <h5 className="cred_footer">
            made By : <span> Nizar Maarouf</span>
          </h5>
          <a
            className="cred-link"
            href="https://www.linkedin.com/in/nizar-maarouf/ "
            alt="linkedin"
            target="_blank"
          >
            LinkedIn <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="cred-link"
            href="https://github.com/NizarMaarouf "
            alt="github"
            target="_blank"
          >
            Github <i className="fab fa-github"></i>
          </a>
          <h2 className="right" >All right reserve HADAYA 2021</h2>
        </footer>
      </div>
    </Router>
  );
}
export default App;
