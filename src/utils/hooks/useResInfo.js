import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useResInfo = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [topPicksData, setTopPicksData] = useState([]);
  const [accordionData, setAccordionData] = useState([]);
  const [accordionList, setAccordionList] = useState(false);
  // const [index, setIndex] = useState(0);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`
      );
      const jsonData = await response.json();
      const data = jsonData.data.cards[2].card.card.info;
      
      const topPicks = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;
      console.log(topPicks, "toppppickss")

      const accordionGroup = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
      const accordionChildList = accordionGroup?.filter(cat => cat?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
      // console.log(accordionChildList, "gropppppppppp");

      setRestaurantData(data);
      setTopPicksData(topPicks);
      setAccordionData(accordionChildList);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  const toggleAccordionList = () => setAccordionList(!accordionList);

  return { restaurantData, accordionData, topPicksData, accordionList, toggleAccordionList };
}
