import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
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
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
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
          <h2 className="right">All right reserve HADAYA 2021</h2>
        </footer>
      </div>
    </Router>
  );
}
export default App;
