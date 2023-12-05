import React from 'react';
// import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
//  import Cards from './components/Cards';
import {Route,Routes} from "react-router-dom"
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import PaymentPage from './Pages/PaymentPage';
import EventsPage from './Pages/EventsPage';
// import Slider from './components/Slider';



function App() {
  return (
 <>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/detail" element={<DetailsPage/>}></Route>
    <Route path="/purchase" element={<PaymentPage/>}></Route>
    <Route path="/events" element={<EventsPage/>}></Route>
  </Routes>
  {/* <NavBar/> */}
 {/* <Slider/> */}
 {/* <Cards/>  */}
 </>
  );
}

export default App;
