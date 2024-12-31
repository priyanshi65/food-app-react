import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { Error } from "./components/errorPage";
import AboutUs from "./components/aboutUs";
import Body from "./components/body";
import ResInfo from "./components/resturantInfo";
import AddCart from "./components/addCart";
import ItemInfo from "./components/itemInfo";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/resInfo/:resId',
        element: <ResInfo/>
      },
      {
        path: '/resInfo/:itemId',
        element: <ItemInfo/>
      },
      {
        path: '/addCart',
        element: <AddCart/>
      }
    ]
  }
])