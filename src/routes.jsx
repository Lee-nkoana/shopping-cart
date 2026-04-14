import App from "./App";
import Pages from "./Page"; 
import ErrorPage from "./ErrorPage";
import Shop from "./ShoppingPage";
import Cart from "./Cart";
import Home from "./Home"; 

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <DefaultProfile /> },
      { index: true, element: <Home /> },
      // { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ]
  },
  
];

export default routes;
