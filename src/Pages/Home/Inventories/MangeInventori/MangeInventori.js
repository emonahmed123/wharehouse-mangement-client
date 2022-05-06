import React from 'react';
import useBikes from '../../../../hooks/useBikes';

const MangeInventori = () => {
   
    const [bikes,  setBikes] =useBikes( );
    const   handledelete =(id)=>{
        const proceed = window .confirm('Are you sure')
          
        if(proceed){
            const url = `https://intense-citadel-51923.herokuapp.com/bike/${id}`
            
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remainig =bikes.filter(bike =>bike._id !==id)  
                        
                setBikes(remainig)
                 
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Mange Inventori</h2>

            {
                bikes.map(bike => <div key={bike._id}>

                   <h5>{bike.name} <button onClick={()=> handledelete(bike._id)}>X</button></h5>
                       
                </div>) 
            }
        </div>
    );
};

export default MangeInventori;