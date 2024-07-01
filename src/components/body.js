import React, { useState, useEffect } from "react";
import html2pdf from 'html2pdf.js';
import Restaurant from "./bodyResturantData";
import Slider from "react-slick";
import pdfContent from "../htmlContent/pdfContent.html";

function Body() {
  const [index, setIndex] = useState(8);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [topRated, setTopRated] = useState(false);
  const [sliderData, setSliderData] = useState([]);

  const handleTopRated = () => {
    setTopRated(true);
  };

  const handleReset = () => {
    setTopRated(false);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const showFilter = filteredData.filter((res) => {
    const filterRating = topRated ? Number(res.info.avgRating) >= 4 : true;
    const searchRestro = res.info.name.toLowerCase().includes(search.toLowerCase());
    return searchRestro && filterRating;
  });

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/search/v3?lat=21.99740&lng=79.00110&str=Domino%27s%20Pizza&trackingId=0aec90ce-9719-d7f4-a0e1-8f9249ece2e6&submitAction=ENTER&queryUniqueId=dc0b3ef1-aa0f-299c-cbb2-c8f1b0e96b70');
      const jsonData = await response.json();
      const data = jsonData.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants;
      setFilteredData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSliderData = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'); // Replace with the actual API URL
      const jsonData = await response.json();
      const data = jsonData.data.cards[0].card.card.imageGridCards.info;
      console.log(data,"zxcvbnm")
      setSliderData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchSliderData();
  }, []);

  const convertToPdf = async () => {
    const response = await fetch(pdfContent);
    const htmlContent = await response.text();

    const options = {
      filename: 'my-document.pdf',
      width: '100%',
      border: 1,
      margin: [20, 15, 20, 15],
      image: { type: 'jpg', quality: 1.4 },
      html2canvas: { scale: 1.4 },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      jsPDF: {
        unit: 'pt',
        format: 'a4',
        orientation: 'portrait',
        compress: true
      },
    };

    html2pdf().set(options).from(htmlContent).toContainer()
      .toCanvas()
      .toImg()
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages();
        const headingMarginTop = 20;

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);

          pdf.setFontSize(12);
          pdf.text('STARK INDUSTRIES - 148 65th Avenue Northeast 908', pdf.internal.pageSize.getWidth() / 2, headingMarginTop, { align: 'right' });

          pdf.setFontSize(10);
          pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.getWidth() / 2, pdf.internal.pageSize.getHeight() - 10, { align: 'center' });
        }
      }).save();
  };

  const sliderSettings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 1

    // dots: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="bodyButton">
        <div>
          <button onClick={handleTopRated} className="styleButton">Top Restros</button>
        </div>
        <div>
          <button onClick={handleReset} className="styleButton">Reset</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleSearch}
            style={{ width: "366px", borderRadius: "7px", height: "24px", paddingLeft: "6px", boxShadow: "#7c7c7c 2px 2px 2px 2px" }}
          />
        </div>
        <div>
          <button onClick={convertToPdf} className="styleButton">Get PDF</button>
        </div>
      </div>
      <div style={{marginTop: "20px"}}>
        <Slider  className="helo" {...sliderSettings} style={{width: "80%",margin: "auto auto"}}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <img style={{height: "155px", width: "155px", marginTop: "40px"}} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt={item.id} />
            </div>
          ))}
        </Slider>
      </div>
      <h4 className="headerHeading">Restaurant</h4>
      <div className="appBody">
        {showFilter?.map((res, i) => {
          if (i < index)
            return <Restaurant key={res.id} appData={res.info} />;
        })}
      </div>
      {index < showFilter.length && (
        <button style={{border: "none", marginLeft: "45%", borderRadius: "100%"}} onClick={() => setIndex(index + 8)}>
          <img style={{height: "130px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVK2ZWlwRDCoRnL9-c_p2iaesN4-oxCv-sfg&s" alt="Load more"/>
        </button>
      )}
    </>
  );
}

export default Body;
