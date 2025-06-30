import { createBrowserRouter } from "react-router";
import Rootlayout from "../Rootlayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import ProjectDetail from "../pages/ProjectDetail";


export const router = createBrowserRouter([
  {
    path: "/",
     Component:Rootlayout,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
        {
            path:"/",
            Component:Home

        },
        {
            path:'/about',
            Component:About

        },
        {
          path:'/projects/:id',
          Component:ProjectDetail

        }
     ]
  },
]);