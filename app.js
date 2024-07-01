import { Provider } from "react-redux"
import Header from "./src/components/header"
import { Outlet } from "react-router-dom"
import AppStorage from "./src/storage/appStorage"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App(){
  return(
    <div className="mainContainer">
      <Provider store={AppStorage}>
        <Header/>
        <Outlet/>
      </Provider>
    </div>
  )
}

export default App 