import React from 'react';
import ExtraSectionFirs from './ExtraSectionFirst/ExtraSectionFirs';
import Inventories from './Inventories/Inventories';
import Silder from './Silder/Silder';

const Home = () => {
    return (
        <div>
         <Silder></Silder>
        <Inventories></Inventories>
         <ExtraSectionFirs></ExtraSectionFirs> 
        </div>
    );
};

export default Home;