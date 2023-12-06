// ImageSlider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import eventsData from '../data/Events';
import "../styles/ImageSlider.css";
function Slider() {

    return (
      <Carousel>
        {eventsData.slice(0, 4).map((event, index) => (
          <Carousel.Item key={index}>
            <div className="slider-container">
              <div className="slider-image-container">
                <img
                  className="d-block w-100"
                  src={event.images}
                  alt={`Slide ${index + 1}`}
                  style={{maxHeight:"600px", objectFit:"contain"}}
                />
              </div>
              <div className="slider-description-container">
                <h3 className='event-title'>{event.name}</h3>
                <p className='event-date'>{event.date}</p>
                <p className='event-text'>{event.description.text[0]}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  

export default Slider;
