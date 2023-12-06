// EventsPage.jsx
import "../styles/EventsPage.css"
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Dropdown } from 'react-bootstrap';
import eventsData from "../data/Events";

function EventsPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const cities = ['İstanbul', 'Ankara', 'İzmir'];
  const categories = ['Tiyatro', 'Bale', 'Konser', 'Bootcamp'];

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEventsData = eventsData.filter((event) => {
    const cityMatch = selectedCity ? event.place.includes(selectedCity) : true;
    const categoryMatch = selectedCategory ? event.category === selectedCategory : true;
    return cityMatch && categoryMatch;
  });

  // eventsData'yi id'ye göre sırala
  const sortedEventsData = filteredEventsData.sort((a, b) => a.id - b.id);

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <h1 className="listing-title">Etkinlikler</h1>
        <div className="filters">
          <Dropdown onSelect={handleCityChange} className="mr-2">
            <Dropdown.Toggle variant="secondary" className='dropdown-body '>
              {selectedCity || 'Şehir Seçiniz'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="">Tümü</Dropdown.Item>
              {cities.map((city, index) => (
                <Dropdown.Item key={index} eventKey={city}>
                  {city}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={handleCategoryChange}>
            <Dropdown.Toggle variant="secondary" className='dropdown-body '>
              {selectedCategory || 'Kategori Seçiniz'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="">Tümü</Dropdown.Item>
              {categories.map((category, index) => (
                <Dropdown.Item key={index} eventKey={category}>
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <hr />
        <div className="grid-columns" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {sortedEventsData.map((event) => (
            <div key={event.id} className="column">
              <EventCard
                title={event.name}
                location={event.place}
                dateTime={event.date}
                imageSrc={event.images}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventsPage;
