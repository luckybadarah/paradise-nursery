import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>
              <p>Your home for beautiful plants</p>
              <Link to="/products">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
