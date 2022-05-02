import React from 'react';
import ExtraSectionFirs from './ExtraSectionFirst/ExtraSectionFirs';
import ExtraSectionSecond from './ExtraSectionsecond/ExtraSectionSecond';
import Inventories from './Inventories/Inventories';
import Silder from './Silder/Silder';

const Home = () => {
    return (
        <div className='home'>
         <Silder></Silder>
        <Inventories></Inventories>
         <ExtraSectionFirs></ExtraSectionFirs> 
   <ExtraSectionSecond></ExtraSectionSecond>
         
        </div>
    );
};

export default Home;