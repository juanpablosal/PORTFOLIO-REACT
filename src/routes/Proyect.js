import React from 'react';
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer" ; 
import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const proyect = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default proyect
