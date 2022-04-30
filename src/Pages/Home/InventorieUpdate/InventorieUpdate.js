import React from 'react';
import { useParams } from 'react-router-dom';
import useBike from '../../../hooks/useBike';
import './InventorieUpdate.css'
const InventorieUpdate = () => {
      const {bikeId} =useParams()
    const [bike] = useBike(bikeId)
    return (
        <div >
            <h1 className='mb-5 text-center  text-danger' >Mange Inventories</h1>
               <div className='singlecard' >
               <div className="card ' " style={{ width: "18rem" }} >
            <img src={bike.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{bike.name}</h5>
                <p className="card-text">Qunatity:{bike.quantity}</p>
                <p className="card-text">{bike.discription}</p>
                < button className="btn btn-danger"> Delivered </button>
            </div>
        </div>


               </div>
        </div>
    );
};

export default InventorieUpdate;