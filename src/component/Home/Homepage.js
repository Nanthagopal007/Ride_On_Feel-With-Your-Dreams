import React from 'react';
import Caro from './Carousel1';
 import Driveban from './Driveban';
 import Nav from '../common/nav';
 import Content from './Content';
 import Address from './Address';
import Banner2 from './banner2';
import Video from './video';
import Banner3 from './banner3';
import Footer from '../common/footer';
import Caro2 from './carousel2';




const Homepage = () => {
  return (
    <>
    <Nav/>
    <Driveban/>
    <Content/>
    <Address/>
    <Caro/>
    <Banner2/>
    <Video/>
    <Banner3/>
    <Caro2/>
    <Footer/>

    </>
  )
}

export default Homepage;