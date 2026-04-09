import { Link, Outlet } from "react-router-dom";
import './index.css'

const App = () => {
  return (
    <div>
      <nav>
        <h1 className="shopName">Praguu</h1>
        <div className="nav-lk">
          <Link to="/" className="nav-links">Home</Link> 
          <Link to="/shop" className="nav-links">Shop</Link> 
          <Link to="/cart" className="nav-links">Cart</Link>
        </div>
      </nav>
      <hr/>
      <Outlet />
    </div>
  );
};

export default App;
