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

function Shop(){
  const [getItemData, setItemData] = useState([]);
  const [getLoading,  setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=30');
        const data = await response.json();

        console.log(data)
        setItemData(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
      
    }
    fetchStoreData();
  }, []);

  if (getLoading) return (
    <>
      <p>Loading items...</p>;
    </>
  )

  return (
    <div className="shop-grid" >
      {getItemData.map((item) => (
          <div className="shop-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product_img"/>
          <h3>{item.title}</h3>
          <h4>{item.price}</h4>

          <div className="price-bar">
            <Button text={"-"} />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <Button text={"+"}/>
          </div>
          <Button text={"Add to Cart"}/>
        </div>
      ))}
    </div>
  );

}

// const Shop = () => {
//   return (
//     <div className="shop-grid">
//       <div className="shop-card">
//          <img src="#" alt="image"></img>
//          <h3>item title</h3>
//          <h4>item price</h4>
//          <div className="price-bar">
//           <Button text={"-"} />
//           <input type="number" value/>
//           <Button text={"+"}/>
//          </div>
//          <Button text={"Add to Cart"}/>
//       </div>
//     </div>
//   );
// };

export default Shop;
