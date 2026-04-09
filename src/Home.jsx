import { useParams } from "react-router-dom";
import Shop from "./ShoppingPage";
import Cart from "./Cart";

const Pages = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "cart" ? (
        <Cart />
      ) : name === "shop" ? (
        <Shop />
      ) : 
        name === "home" ? (
        <Home />
      ) : (
        <DefaultLandingPage />
      )}
    </div>
  );
};

export default Pages;
