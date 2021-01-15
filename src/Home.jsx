import React from 'react';
import web from '../src/images/one.gif';
import Common from './Common';


const Home = () =>{
    return(
        <>
      <Common  
        name="Grow your business with"
        imgsrc= {web} 
        visit = "/services"
        btname = "Get started"
       />   
           
        </>
    );
   
};

export default Home;