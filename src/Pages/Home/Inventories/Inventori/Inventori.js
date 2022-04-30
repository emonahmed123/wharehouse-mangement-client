import React from 'react';
import './Inventori.css'

const Inventori = ({bike}) => {
    const{name,img,discription,quantity}= bike
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
        <div className="card  inventory ms-5 " style={{ width: "18rem" }} >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Qunatity:{quantity}</p>
                <p className="card-text">{discription}</p>
                <a href="#" className="btn btn-primary"> U  p  d  a  t  e </a>
            </div>
        </div>
    </div>
    );
};

export default Inventori;