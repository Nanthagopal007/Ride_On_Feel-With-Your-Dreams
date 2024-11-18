import React from 'react'
import Nav from '../common/nav';
import Footer from '../common/footer';
import Form from './form';
import Banner from '../common/banner';

export const Contactpage = () => {
  return (
    <>
      <Nav/> 
      <Banner Title="ContactUs"page="ContactUs"/>
      <Form/>
      <Footer/> 
    </>
  )
}

export default Contactpage;