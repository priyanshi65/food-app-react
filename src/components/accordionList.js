import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../storage/cartSlice";

const AccordionList = (props) => {
  const {childItem} = props
  const {name, description, imageId, price, ratings}= childItem
  const dispatch = useDispatch()

  const handleAddItem = () => {
    dispatch(addItem("pani puri..."))
  }

  const handleRemoveItem = () => {
    dispatch(removeItem())
  }

  const handleClearItem = () => {
    dispatch(clearItems())
  }


  return (
    <div className="recommenReasturant">
      <div className="accordionData">
        <h6 className="accordionName">Name: {name}</h6>
        <h6 className="listDesc">Description: {description}</h6>
        <h6>Price: {price}</h6>
        <h6>Rating: {ratings.aggregatedRating.rating}</h6>
      </div>
      <div className="childAccordionImgList">
        { imageId
          ? <img className="childAccordionImage" src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt={name}/>
          : <img className="childAccordionNoImage" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmirI4PxLNSAAUf4tBZCiZjUtwrpt9oVu6NIshLIdqjNK9wWcjXgtWRr81WMbgJ7HuVlc&usqp=CAU`}/>
        }
      </div>
      {/* <div> */}
        <button className="recommenAdd" onClick={handleAddItem}>Add +</button>
        {/* <button className="recommenRemove" onClick={handleRemoveItem}>Remove -</button>
        <button className="recommenClear" onClick={handleClearItem}>Clear </button> */}
      {/* </div> */}
    </div>
  );
}

export default AccordionList
