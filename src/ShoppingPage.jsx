import { Link } from "react-router";
import './styles.css'

const Shop = () => {
  return (
    <div className="shop-grid">
      <div className="shop-card">
         <img src="#" alt="image"></img>
         <h3>item title</h3>
         <h4>item price</h4>
         <div className="price-bar">
          <button>-</button>
          <input type="number" />
          <button>+</button>
         </div>
         <button>add to cart</button>
      </div>
    </div>
  );
};

export default Shop;
