import React from 'react';
import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <>
    
    
     <div className="container px-0">
       <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
         <a className="navbar-brand logo text-danger fs-2 ps-5" href="#">RideOn</a>
         <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#box">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="box">
           <div className="d-flex justify-content-between w-100">
             <ul className="navbar-nav">
               <li className="nav-item ">
               <NavLink to="/" className="nav-link  fs-5">Home</NavLink>
               </li>
               <li className="nav-item ">
               <NavLink to="/Aboutpage"  className="nav-link  fs-5">About</NavLink>
               </li>
               <li className="nav-item ">
               <NavLink to="/Contactpage" className="nav-link  Contact fs-5" >Contact</NavLink>
               </li>
             </ul>
             <div>
             {/* <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form> */}
               {/* <input type="text"  placeholder="Search"className='form-control'/> */}
               <i className="bi bi-search text-white fs-5 pe-5"></i>
             </div>
           </div>
         </div>
       </nav>
     </div>
    </>
  );
}

export default Nav;
