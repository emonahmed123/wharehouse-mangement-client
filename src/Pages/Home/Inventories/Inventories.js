import React ,{useState,useEffect}from 'react';
import Inventori from './Inventori/Inventori';
import './Inventories.css'
const Inventories = () => {
    const [bikes,setBikes]=useState([])
    
     useEffect(()=>{
            fetch('http://localhost:5000/bike')
            .then(res=>res.json())
            .then(data=>setBikes(data))
     },[]) 

    return (
        <div className='invcontainer' >

         <h2 className='Inv' >Inventories</h2>

            <div className='row g-2' >
            {
            bikes.slice(0,6).map(bike=><Inventori key={bike._id} bike={bike} ></Inventori>)

           }

            </div>
    

        </div>
    );
};

export default Inventories;