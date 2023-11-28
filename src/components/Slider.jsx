// ImageSlider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import eventsData from '../data/Events';

const Slider = () => {

  return (
    
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#DC3545",marginTop:"5rem"}}>
          <Carousel style={{width:"600px",height:"400px"}}>
      {eventsData.slice(0, 4).map((event, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={event.image}
            alt={`Slide ${index + 1}`}
            style={{height:"auto",minWidth:"100%"}}

          />
          <Carousel.Caption>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
      </div>
    
  );
};

export default Slider;
