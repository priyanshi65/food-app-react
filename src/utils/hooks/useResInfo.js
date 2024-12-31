import { useState, useEffect } from "react";

export const useResInfo = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [topPicksData, setTopPicksData] = useState([]);
  const [accordionData, setAccordionData] = useState([]);
  const [accordionList, setAccordionList] = useState(false);
  const [itemInfoData, setItemInfoData] = useState(null); // Initially null

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`
      );
      const jsonData = await response.json();
      console.log("Full API Response:", jsonData);

      const data = jsonData?.data?.cards?.[2]?.card?.card?.info;
      const topPicks = jsonData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel;
      
      const itemInfo = jsonData?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info;
      

      const accordionGroup = jsonData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const accordionChildList = accordionGroup?.filter(
        (cat) => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setRestaurantData(data || null);
      setTopPicksData(topPicks || []);
      setAccordionData(accordionChildList || []);
      setItemInfoData(itemInfo || null);
    } catch (err) {
      console.error("Error fetching restaurant info:", err);
    }
  };

  useEffect(() => {
    if (resId) getRestaurantInfo();
  }, [resId]);

  const toggleAccordionList = () => setAccordionList(!accordionList);

  return { restaurantData, accordionData, topPicksData, accordionList, itemInfoData, toggleAccordionList };
};
