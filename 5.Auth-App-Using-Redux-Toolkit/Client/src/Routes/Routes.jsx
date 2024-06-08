import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);

export default Routes;
