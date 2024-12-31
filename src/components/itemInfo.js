import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemInfo = () => {
  const { id } = useParams(); // Item ID from the route
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Construct the API URL dynamically based on the item ID
  const constructApiUrl = (id) => {
    return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&collection=${id}&type=rcv2&offset=0&page_type=null`;
  };

  useEffect(() => {
    const apiUrl = constructApiUrl(id);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        const cards = responseData?.data?.cards || [];
        setData(cards);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data.");
      });
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;
  if (data.length === 0) return <div>No data found for this item.</div>;

  return (
    <div>
      {data.map((card, index) => (
        <div key={index}>
          <h1>{card?.name || "No Name Available"}</h1>
          <p>{card?.description || "No Description Available"}</p>
          {card?.imageId && (
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${card.imageId}`}
              alt={card.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemInfo;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useResInfo } from "../utils/hooks/useResInfo";

// const ItemInfo = () => {
//   const { id } = useParams();
//   // const { itemInfoData } = useResInfo(id);

//   console.log("Restaurant ID:", id);
//   console.log("Item Info Data:", itemInfoData);

//   if (!itemInfoData || itemInfoData.length === 0) {
//     return <div>Loading or no item information available...</div>;
//   }

//   return (
//     <div>
//       <h1>Item Information</h1>
//       <p>Restaurant ID: {id}</p>
//       <ul>
//         {itemInfoData.map((item) => (
//           <li key={item.id}>
//             <p>Item ID: {item.id}</p>
//             <p>Item Details: {JSON.stringify(item)}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemInfo;
