import React from "react";
import Heading from "./components/Heading";
import reviews from "./data";
import Testimonials from "./components/Testimonials";



const App = () => {
  return (
  <div className='min-h-screen w-full flex justify-center items-center'>
    <div >
    <Heading />
    
    <Testimonials reviews={reviews}/>
    
   
    </div>
    </div>
  )
};

export default App;
