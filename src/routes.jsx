import App from "./App";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  }
];

export default routes;
