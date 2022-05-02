import React from 'react';
import Inventories from './Inventories/Inventories';
import Silder from './Silder/Silder';

const Home = () => {
    return (
        <div>
        <h1>  this is home</h1>   
         <Silder></Silder>
        <Inventories></Inventories>
        </div>
    );
};

export default Home;