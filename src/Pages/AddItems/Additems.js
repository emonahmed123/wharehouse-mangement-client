import React from 'react';
 import { useForm } from "react-hook-form";
const Additems = () => {
    const { register, handleSubmit } =  useForm()
    const onSubmit = data => {console.log(data);
    const url =`https://intense-citadel-51923.herokuapp.com/bike`

    fetch(url,{
  method:'POST',
  headers:{
     'content-type':'application/json'
 },
 body:JSON.stringify(data)

    })
    .then(res=> res.json())
    .then(result=>{console.log(result)
    
    })
    
    }
     
return (
    <div className='w-50 mx-auto'>
        <h3>Add Items</h3>
     <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
  <input className='input input-bordered w-full max-w-xs'  {...register("name", { required: true, maxLength: 20 })} />
  <input  className='mb-2 input input-bordered w-full max-w-xs'  placeholder=' Description'  {...register("description" )} />
  <input  className='mb-2'  placeholder=' Quantity' type="number" {...register("quantity")} />
  <input className='mb-2'  {...register("supliername", { required: true, maxLength: 20 })} />
  <input  className='mb-2'  placeholder='PhotoUrl' type="text" {...register('img')} />
  <input type="submit"  value='Add Items'/>
</form>

    </div>
);
};

export default Additems;