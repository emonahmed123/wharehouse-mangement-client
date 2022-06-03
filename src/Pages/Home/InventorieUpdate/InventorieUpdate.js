import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useBike from '../../../hooks/useBike';
import './InventorieUpdate.css'
const InventorieUpdate = () =>{
      const {bikeId} =useParams()
    const [bike,setBike ] = useBike(bikeId)
       const {name,quantity,} =bike;
     const handeldevliverd =(updatedQuantity)=> {
          const newQuantity =updatedQuantity-1;
          const url =`https://intense-citadel-51923.herokuapp.com/bike/${bikeId}`
          fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newQuantity }),
        }).then(res=>res.json())
          .then(data=>{
              console.log(data)
              if (data.modifiedCount > 0) {
                fetch(`https://intense-citadel-51923.herokuapp.com/bike/${bikeId}`)
                    .then(res => res.json())
                    .then(data => setBike(data))
              
            }
         
            })
        }
        const { register, handleSubmit } =  useForm()
        const onSubmit = data=> {console.log(data)
          
            const  inuputQuanty= data.quantity;
           if(inuputQuanty > 0){
            
           }
           const newQuantity = parseInt(inuputQuanty)+quantity;

            
            const url =`https://intense-citadel-51923.herokuapp.com/bike/${bikeId}`
            fetch(url, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ newQuantity }),
          }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.modifiedCount > 0) {
                  fetch(`https://intense-citadel-51923.herokuapp.com/bike/${bikeId}`)
                      .then(res => res.json())
                      .then(data => setBike(data))
                
              }
           
              })
                           
       
        }

      
   
   
   
   
    return (
        <div className='mx-5' >
            <h1 className='mb-5 text-center  text-danger' >Mange Inventories</h1>
               <div >
               <div className="card ' " style={{ width: "18rem" }} >
            <img src={bike.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Qunatity:{quantity}</p>
                <p className="card-text">{bike.discription}</p>
               { quantity>1 && < button onClick={()=>handeldevliverd(quantity)}  className="btn btn-danger"> Delivered </button>   }
               { quantity <1  && < button disabled onClick={()=>handeldevliverd()}  className="btn btn-danger"> Delivered </button>   }
            </div>
        </div>


               </div>

          <div className='mt-5' >
               <h4>Add Quantity</h4>
       <form onSubmit={handleSubmit(onSubmit)} >
           
       <input  className='mb-2 d-block text-primary  w-25'placeholder=' Quantity' type="number" {...register("quantity")} />
        <br></br>
    
         <input className='btn btn-primary' type="submit"  {...register('eiruyti')} value='Add Items'/>
      
       </form>
  


          </div>




   <div className='mt-5' >
        <Link to='/additems' className="btn btn-primary d-block w-25 mb-4  "   >Add itmes</Link>
           <Link to='/mangeitem' className='btn btn-danger d-block  w-25 '> Mange Inventories </Link>
           </div>
        </div>
    );
    

}

export default InventorieUpdate;