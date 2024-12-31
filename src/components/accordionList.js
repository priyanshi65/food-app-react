import { useDispatch } from "react-redux";
import { addItem } from "../storage/cartSlice";

const AccordionList = (props) => {
  const { childItem } = props;
  const { name, description, imageId, price, ratings } = childItem;
  const dispatch = useDispatch();
  const total_price = price/100;
  console.log("total_price", total_price, price)

  const handleAddItem = () => {
    dispatch(addItem("pani puri..."));
  };

  // const handleRemoveItem = () => {
  //   dispatch(removeItem());
  // };

  // const handleClearItem = () => {
  //   dispatch(clearItems());
  // };

  const truncateDescription = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="recommenReasturant">
      <div className="accordionData">
        <h6 className="accordionName">Name: {name}</h6>
        <h6 className="listDesc">
          Description: {truncateDescription(description, 120)}
        </h6>
        {total_price && <h6>price: {total_price}</h6>}
        {ratings.aggregatedRating.rating ?
          <h6><img style={{height: "18px",marginRight: "5px", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZZDDZdrwOTUL--HgKdSA_22ZgBciqwXhPg&s"/> {ratings.aggregatedRating.rating}</h6> : ' '
        }
      </div>
      <div className="childAccordionImgList">
        {imageId ? (
          <img
            className="childAccordionImage"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
            alt={name}
          />
        ) : (
          <img
            className="childAccordionNoImage"
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmirI4PxLNSAAUf4tBZCiZjUtwrpt9oVu6NIshLIdqjNK9wWcjXgtWRr81WMbgJ7HuVlc&usqp=CAU`}
          />
        )}
      </div>
      <button className="recommenAdd" onClick={handleAddItem}>Add +</button>
    </div>
  );
};

export default AccordionList;
