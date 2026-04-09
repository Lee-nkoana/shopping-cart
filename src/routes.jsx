import App from "./App";
import Pages from "./Home"; 
import ErrorPage from "./ErrorPage";
import Shop from "./ShoppingPage";
import Cart from "./Cart";
import DefaultProfile from "./DefaultLanding"; 

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ]
  },
  
];

export default routes;
