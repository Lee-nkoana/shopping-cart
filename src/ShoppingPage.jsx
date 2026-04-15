import { Link } from "react-router";
import './styles.css'
import { useState, useEffect } from "react";

function Input(props) {
    return (
        <input {...props} />
    );
}

function Button({ text, ...props }){
  return( 
    <button {...props}>{text}</button>
   );
}

// function IncreaseButton(){
//   const get
// }

// function DecreaseButton(){

// }

function Cards(){
  const [getItemData, setItemData] = useState([]);
  const [getLoading,  setLoading] = useState([]);
  const [amount, setAmount] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [cart, setCare] = useState([]);


}

const Shop = () => {
  return (
    <div className="shop-grid">
      <div className="shop-card">
         <img src="#" alt="image"></img>
         <h3>item title</h3>
         <h4>item price</h4>
         <div className="price-bar">
          <Button text={"-"} />
          <input type="number" value/>
          <Button text={"+"}/>
         </div>
         <Button text={"Add to Cart"}/>
      </div>
    </div>
  );
};

export default Shop;
