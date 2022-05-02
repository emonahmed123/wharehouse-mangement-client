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
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
        <div className="card  inventory ms-5 " style={{ width: "18rem" }} >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Qunatity:{quantity}</p>
                <p className="card-text">{discription}</p>
                <p className="card-text">Supliername:{supliername}</p>
                < button onClick={()=>NavigaetUpadate (_id)}  className="btn btn-primary"> U  p  d  a  t  e </button>
            </div>
        </div>
    </div>
    );
};

export default Inventori;