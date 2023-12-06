import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import PaymentPage from './Pages/PaymentPage';
import EventsPage from './Pages/EventsPage';




function App() {
  return (
 <>
 <div style={{minHeight:"100vh"}}>

  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/detail/:id" element={<DetailsPage/>}></Route>
    <Route path="/purchase" element={<PaymentPage/>}></Route>
    <Route path="/events" element={<EventsPage/>}></Route>
  </Routes>
 </div>
 </>
  );
}

export default App;
