import React from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
import { Company } from './company';
import Booking from './booking';
import Worksection from './work';
import Banner from '../common/banner';

export const Aboutpage = () => {
  return (
    <>
    
    <Nav/>
    <Banner Title="AboutUs" page="AboutUs"/>
    <Company/>
    <Booking/>
    <Worksection/>
    <Footer/>  
    
    </>  
  )
};

export default Aboutpage;
