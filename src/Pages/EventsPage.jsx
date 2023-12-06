import React, { useState } from 'react';
import Cards from '../components/Cards';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Dropdown } from 'react-bootstrap';
import "../styles/EventsPage.css";

function EventsPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const cities = ['İstanbul', 'Ankara', 'İzmir'];
  const categories = ['Rock', 'Pop', 'Jazz', 'Klasik'];

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  // Örnek veri
  const eventData = [
    { id: 1, title: 'Etkinlik 1', location: 'Your Location 1', dateTime: 'Event date - Time 1' },
    { id: 2, title: 'Etkinlik 2', location: 'Your Location 2', dateTime: 'Event date - Time 2' },
    { id: 3, title: 'Etkinlik 3', location: 'Your Location 3', dateTime: 'Event date - Time 3' },
    { id: 4, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 5, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 6, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 7, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 8, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 9, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 10, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 11, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 12, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 13, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 14, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 15, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 16, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 17, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 18, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 19, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    { id: 20, title: 'Etkinlik 4', location: 'Your Location 4', dateTime: 'Event date - Time 4' },
    // Daha fazla etkinlik ekleyebilirsiniz
  ];

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
        <div className="event-grid">
          {eventData.map((event) => (
            <div key={event.id} className="grid-col">
              <Cards
                title={event.title}
                location={event.location}
                dateTime={event.dateTime}
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
