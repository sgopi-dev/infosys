import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Register from "../pages/register";
import ProjectDetails from "../pages/projectdetails";
import CopyRight from "../pages/copyright";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },
  {
    path: "/contact", 
    element: <Contact />
  },
  {
    path: "/login", 
    element: <Login />
  },
  {
    path: "/register", 
    element: <Register />
  },
  {
    path: "/projectdetails", 
    element: <ProjectDetails />
  },
  {
    path: "/copyrights", 
    element: <CopyRight/>
  },
]);

export default router;