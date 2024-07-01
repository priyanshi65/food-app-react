// const Accordion = (props) => {
//   const {accordionData} = props
//   const {title, items} =accordionData

//   return(
//     <div>
//       <div>
//         <h4>hiii</h4>
//       </div>
//     </div>
//   )
// }

// const Accordion = (props) => {
//   // console.log(props.data,"tileeeee")
//   const { title,items} = props.data 
//   console.log(items, "itemssssssss")
  
//   return (
//     <div>
//       <div>
//         <h4>{title}</h4>
//       </div>
//       <div>
//         {items?.map(item => (
//           <div>
//             {/* <img src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}/> */}
//             <p>{item.card.info.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import AccordionList from './accordionList.js'
import { useResInfo } from "../utils/hooks/useResInfo.js";

const CustomAccordion = (props) => {
  const { itemInfo} = props;
  const { title, itemCards } = itemInfo;
  const { accordionList, toggleAccordionList } = useResInfo(props.resId);

  return (
    <div className='accodion'>
      <div className="accordionTitle" onClick={toggleAccordionList}>
          <h5>{title} ({itemCards.length})</h5>
      </div>
      {accordionList &&
      <div>
        <div>
          {itemInfo?.itemCards?.map((list) => {
            return <AccordionList key={list.card.info.id} id={list.card.info.id} childItem={list.card.info} />;
          })}
        </div>
      </div>}
    </div>
  );
}

export default CustomAccordion

// export default Accordion;

// import ResRecommendedCard from "./recommendedCard.js";
// import { useParams } from "react-router-dom";
// import { useResInfo } from "../utils/hooks/useResInfo.js";


// const Accordion = ({ accordionData }) => {
//   const { resId } = useParams();
//   const { restaurantData} = useResInfo(resId);
//   const resAccordion = restaurantData
//   console.log(resAccordion, "Accordionsssssssss")

//   const accordionGroup = accordionData?.filter(cat => cat?.card?.card["@type"].includes('ItemCategory'))
//   console.log(accordionGroup, "grouppppppp")
//   console.log(accordionData,"rijjymiiiiiii")
//   return (
//     <div>
//       <div>
//         <h4>hiii</h4>
//       </div>
//     </div>
    // <div className="accordionData">

    //   {accordionData.slice(1,12).map((accordion, index) => (

    //     <details  key={index}>

    //       <summary className="accordionTitle" >
    //         {accordion?.title}
    //       </summary>

    //       <div>
    //         {accordion?.items?.map((res) => (
    //           <ResRecommendedCard key={res?.card?.info?.id} appData={res?.card?.info}/>
    //         ))}
    //       </div>
          
    //     </details>

    //   ))}

    // </div>
//   )
// }


// const ResInfo = () => {
//   // const {resInfo} = useResInfo
//   const { resId } = useParams();
//   const { restaurantData} = useResInfo(resId);

//   const resAccordion = restaurantData?.filter(cat => cat?.card?.card["@type"].includes('ItemCategory'))
//   console.log(resAccordion)
// }

// export default ResInfo