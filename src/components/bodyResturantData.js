import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const {appData} = props
  const {cloudinaryImageId, name, avgRating, costForTwo, cuisines, id} = appData
  return (
    <div className="appReasturant">
      <Link to={`/resInfo/${id}`} className="cardContent">
        <img className="imgStyle" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
        <div className="resBodyData">
          <h5 className="cardName">{name}</h5>
          { avgRating &&
            <p><img style={{height: "18px",marginRight: "5px", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZZDDZdrwOTUL--HgKdSA_22ZgBciqwXhPg&s"/>
            {avgRating}</p>
          }
          <p>{costForTwo}</p>
          <p>{cuisines.join(', ')}</p>
        </div>
      </Link>
    </div>
  );
}

// export const BestSellerTag = (Restaurant) => {
//   return (props) => {
//     return (
//       <div>
//         <h4>--Best Seller--</h4>
//         <Restaurant {...props}/>
//       </div>
//     )
//   }
// }

export default Restaurant;