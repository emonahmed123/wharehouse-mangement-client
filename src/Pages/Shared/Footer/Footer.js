import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const today =new Date()
    const year =today.getFullYear()
    return (
        <footer >

<div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>WareHouse</h2>
      <p className="pr-5 text-white-50"> Best bike  warehouse  in shakipur</p>
      <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
    </div> 
     <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Info</h4>
        <ul className="m-0 p-0">
      
          <li>- <Link to="#">About us</Link></li>
          <li>- <a href="#">Contanct  us</a></li>
          <li>- <a href="#">Veryfication us</a></li>
          <li>- <a href="#">Customer Review</a></li>
         
        </ul>
    </div> 
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Shakipur  Tangile</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p>infoemonahemd.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© {year}. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>




        </footer>
    );
};

export default Footer;