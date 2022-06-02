import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventori.css'

const Inventori = ({bike}) => {
   
    const{name,img,discription,quantity,_id,supliername}= bike
    
    const navigate =useNavigate();
    const NavigaetUpadate =(_id)=>{
       
        navigate(`/inventorieupdate/${_id}`)
    }

    return (
   
    <div class="card-group g-3 col-sm-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src={img}class="card-img-top mx-auto mt-2 "style={{ width: "300px",height:"200px"}}  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name} </h5>
        <p>Discription:{discription}</p>
        <p className="card-text text-bold-400">Supliername:{supliername}</p>
        <p className="card-text">Qunatity:{quantity}</p>
      </div>
      <div class="card-footer">
      < button onClick={()=>NavigaetUpadate (_id)}  className="btn btn-primary  "> U  p  d  a  t  e </button>
      </div>
    </div>
   
  
  </div>
   
   
   
   
   
   
   
    );
};

export default Inventori;