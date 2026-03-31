import { Link } from "react-router-dom";
import './index.css'

const App = () => {
  return (
    <div>
      <nav>
        <h1 className="shopName">Praguu</h1>
        <ul className="nav-links">
          <li>
            {/* <Link to="profile">Profile page</Link> */}
            Home
          </li>
          <li>
            Shop
          </li>
          <li>
            Cart
          </li>
        </ul>
      </nav>
      {/* <hr/> */}
    </div>
  );
};

export default App;
