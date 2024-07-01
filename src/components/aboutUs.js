import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const AboutUs = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const options = [
    { value: 'option1', label: 'Number 1' },
    { value: 'option2', label: 'Number 2' },
    { value: 'option3', label: 'Number 3' }
  ];

  return (
    <>
      <div className="aboutUsHead">
        <h3>This is About Us block</h3>
        <div style={{ display: "flex", margin: "auto", width: "800px", gap: "45px", marginTop: "75px" }}>
          <div>
            <h6>Select Number</h6>
            <Select options={options} placeholder="Add Dropdown" className="dropdown" />
          </div>
          <div>
            <h6>Select Date From</h6>
            <DatePicker
              selected={startDate}
              onChange={date => {
                setStartDate(date);
                if (endDate && date && date > endDate) {
                  setEndDate(null);
                }
              }}
              placeholderText="Date from"
              className="datePicker"
            />
          </div>
          <div>
            <h6>Select Date To</h6>
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              placeholderText="Date to"
              className="datePicker"
              minDate={startDate}
            />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default AboutUs;
