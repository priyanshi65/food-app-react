import { useParams } from "react-router-dom";
import { useResInfo } from "../utils/hooks/useResInfo.js";
import CustomAccordion from "./accordionData.js";

const ResInfo = () => {
  const { resId } = useParams();
  const { restaurantData, accordionData} = useResInfo(resId);
  const categoryAccordionInfo = accordionData?.filter(cat => cat.card.card["@type"].includes('ItemCategory'))

  if (!restaurantData) {
    return <h4>Loading...</h4>;
  }

  const { cloudinaryImageId, name, avgRating, costForTwoMessage, cuisines, locality, city } = restaurantData;

  return (
    <>
      <h5 className="resHeading">Restaurant Information</h5>

      <div>
        <div className="reasturantDetail">
          <img 
            className="resImageInfo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
          <div className="resCardInfo">
            <div>
              <h4 className="resInfo">{name}</h4>
            </div>
            <div style={{display: "flex"}}>
              <img style={{height: "52px",marginTop: "-11px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWRXWeRS_44g-WIWLWrMJ2yUn6hAL2_Ykgg&s"/>
              <p>Cuisines: {cuisines.join(',')}</p>
            </div>
            <div style={{display: "flex",gap: "2px"}}>
              <img style={{height: "32px",marginLeft: "10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGji6hg8-nhlHyWcnN6CYRT2yIaSPA9fN5Aw&s"/>
              <p>Cost for Two: {costForTwoMessage}</p>
            </div>
            <div style={{display: "flex",gap: "5px"}}>
              <img style={{height: "23px",marginLeft: "15px"}} src="https://cdn-icons-png.flaticon.com/512/25/25694.png"/>
              <p>Address: {locality} {city}</p>
            </div>
            <div style={{display: "flex",gap: "5px"}}>
              <img style={{height: "36px",marginLeft: "10px"}} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/rating-2493791-2086129.png"/>
              <p>Average Rating: {avgRating}</p>
            </div>
          </div>
        </div>
        {accordionData?.map((data,i) => {
          return <CustomAccordion key={i} itemInfo={data?.card?.card} />
        })}
      </div>
    </>
  );
};




export default ResInfo