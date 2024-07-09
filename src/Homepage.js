import React from 'react'
import Dheader from './Dheader'
import Icarousel from './Icarousel';
import Cards from './Cards';
import Weoffer from './Weoffer';
import Categories from './Categories';
import Whychooseus from './Whychooseus';
import Ourproducts from './Ourproducts';
import Latestblogs from './Latestblogs';
import Clients from './Clients';
import Safety from './Safety';
import Footer from './Footer';

function Homepage() {
  return (
    <div className='webpulse-main-wrapper wrapper-wide' style={{marginTop: "50px"}}> 
      <Dheader /> 
      <Icarousel />
      <Cards />
      <Weoffer />
      <Categories />
      <Whychooseus />
      <Ourproducts />
      <Latestblogs />
      <Clients />
      <Safety />
      <Footer />
    </div>
  );
}

export default Homepage;
