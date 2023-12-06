// pages/EventsPage.jsx
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import EventCard from '../components/EventCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import eventsData from '../data/Events';
import '../styles/EventsPage.css';

function EventsPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const cities = ['İstanbul', 'Ankara', 'İzmir'];
  const categories = ['Tiyatro', 'Bale', 'Konser', 'Bootcamp'];

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const getFilteredEvents = () => {
    let filteredEvents = eventsData;

    if (selectedCity) {
      filteredEvents = filteredEvents.filter((event) =>
        event.place.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredEvents = filteredEvents.filter((event) =>
        event.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (searchQuery) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredEvents;
  };

  const sortedEventsData = getFilteredEvents().sort((a, b) => a.id - b.id);

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="grid-container">
        <h1 className="listing-title">Etkinlikler</h1>
        <div className="filters">
          <Dropdown onSelect={handleCityChange} className="mr-2">
            <Dropdown.Toggle variant="secondary" className="dropdown-body">
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
            <Dropdown.Toggle variant="secondary" className="dropdown-body">
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
                id={event.id}
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
