import { useResInfo } from "../utils/hooks/useResInfo.js";

const TopPicks = ({ resId }) => {
  const { topPicksData } = useResInfo(resId);
  console.log(topPicksData, "Top Picks Data in Component");

  return (
    <>
      {topPicksData && topPicksData.length > 0 && (
        <>
        <div className="headingTopPicks">
          <h5>Top Picks</h5>
        </div>
        <div className="topPicksData row col-md-12">
          {topPicksData.map((item, index) => (
            <div key={index} className="topPicks col-md-4">
              {item.dish.info && (
                <img className="topPicksImage" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.dish.info.imageId}`}/>
              )}
              <div style={{marginLeft: '30px'}}>
              <h6>{item.title}</h6>
              <p>Price: {item.dish?.info?.price/100}</p>
            </div>
            </div>
          ))}
        </div>
        </>
      )}
    </>
  );
};

export default TopPicks;
