// ImageSlider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import eventsData from '../data/Events';

function Slider() {

  return (
    <Carousel>
      {eventsData.slice(0, 4).map((event, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={event.image}
            alt={`Slide ${index + 1}`}


          />
          <Carousel.Caption>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>


  );
};

export default Slider;
