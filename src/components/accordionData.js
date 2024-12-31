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