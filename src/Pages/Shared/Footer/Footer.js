import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const today =new Date()
    const year =today.getFullYear()
    return (
        <footer >
     {/* <div className='row'>

     <div className=' col-sm-12 col-md-6'>
                  <p>About us</p>
                  <p>Contanct us</p>
                  <p>HelpLing:+89473045960</p>
         </div>
           <div className='col-sm-12 col-md-6'>
           <p><small > copyright {year} </small></p>
            <p><small>Power byEmon Ahmed</small></p>
           </div>
     </div> */}

<div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>WareHouse</h2>
      <p class="pr-5 text-white-50"> Best bike  warehouse  in shakipur</p>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div> 
     <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Info</h4>
        <ul class="m-0 p-0">
      
          <li>- <Link to="#">About us</Link></li>
          <li>- <a href="#">Contanct  us</a></li>
          <li>- <a href="#">Veryfication us</a></li>
          <li>- <a href="#">Customer Review</a></li>
         
        </ul>
    </div> 
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Shakipur  Tangile</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p>infoemonahemd.com</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© {year}. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>




        </footer>
    );
};

export default Footer;