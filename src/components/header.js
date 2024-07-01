import {useState} from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header(){
  const [btnText,setBtnText] = useState('Log In')
  const {items} = useSelector((state) => state.cartSlice);

  console.log(items, "itemssssss")

  return(
    <>
      <div className="appHeader">
        <div className="headStyle">
          <div className="logo">
            <img className="logoTag" src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*lrA8egQdkUtQtJFb.png" alt="image not found"/>
            <p className="navHeading">Foodista</p>
          </div>
          <div className="navigation">
            <ul>
              {/* <div>
                <li><div className="appStatus">Online Status: <div style={{height: "13px", width: "13px", borderRadius: "50%", backgroundColor: "red"}}></div></div></li>
              </div> */}
              <div>
                <Link to={'/'} className="headHome"><li ><strong>Home</strong></li></Link>
              </div>
              <div>
                <Link to={'/about'} className="headHome"><li><strong>About Us</strong></li></Link>
              </div>
              <div>
                <Link to={'/addCart'} className="headHome"><li><strong >Cart: {items.length ?? 0}</strong></li></Link>
              </div>
            </ul>
          </div>
          <div>
            <button className="headHome" onClick={() => btnText == 'Log In'? setBtnText('Log Out') : setBtnText('Log In')} style={{ marginTop: '22px', marginRight: '5px', border: "none", fontSize: "16px", borderRadius: "5px" }}>{btnText}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;