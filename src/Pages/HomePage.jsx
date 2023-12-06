import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Slider from "../components/Slider"
import Categories from '../components/Categories'
import WhyUs from '../components/WhyUs'

function HomePage() {
  return (
    <>
    <NavBar/>
     <Slider/> 
    <WhyUs/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default HomePage