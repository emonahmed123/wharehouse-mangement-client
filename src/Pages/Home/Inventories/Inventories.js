import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import Inventori from './Inventori/Inventori';
import './Inventories.css'
const Inventories = () => {
    const [bikes,setBikes]=useState([ ])
    
     useEffect(()=>{
            fetch('https://intense-citadel-51923.herokuapp.com/bike')
            .then(res=>res.json())
            .then(data=>setBikes(data))
     },[]) 

    return (
        <div className='invcontainer  pb-3' >

         <h2 className='Inv' >Inventories</h2>

            <div className='row g-2' >
            {
            bikes.slice(0,6).map(bike=><Inventori key={bike._id} bike={bike} ></Inventori>)

           }
           <div className=' ps-5'>
           <Link to='/mangeitem' className='btn btn-danger text-center'> Mange Inventori</Link>
           </div>
                 
            </div>

        </div>
    );
};

export default Inventories;