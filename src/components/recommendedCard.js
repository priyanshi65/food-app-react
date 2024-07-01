const ResRecommendedCard = (props) => {
  const {appData} = props
  const {category, imageId, name, price, ratings, description} = appData

  return (

    <div className="recommenReasturant">
      <div className="recommenData">
        <h5 style={{fontSize: "17px"}}>Name: {name}</h5>
        <p>Rating: {ratings.aggregatedRating.rating}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        <p style={{width: "800px"}}>description: {description}</p>
        <button className = "recommenAdd">Add</button>
      </div>
      <div className = "imageCard">
        <img className="recommeCard" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}/>
      </div>
    </div>
  );
};

export default ResRecommendedCard;
