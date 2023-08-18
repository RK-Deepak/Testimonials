import React from 'react'
import Card from './Card';
import {IoIosArrowBack} from "react-icons/io";
import { IoIosArrowForward} from "react-icons/io";
import { useState } from 'react';

export default function Testimonials(props) {
          let review=props.reviews;
  
          const[index,setindex]=useState(0);

          function nextHandler()
          {
               if(index===review.length-1)
               {
                   setindex(0) ;
               }
               else
               {
                    setindex(index+1);
               }
          }
          function backHandler()
          {
               if(index===0)
               {
                    setindex(review.length-1);

               }
               else 
               {
                    setindex(index-1);
               }
          }
          function surpriseHandler()
          {
                    setindex(Math.floor(Math.random()*(review.length-1)));
          }

  return (
    <div className="border mt-7 flex flex-col items-center p-3 px-7 max-w-[43.75rem] h-[25rem] w-[90%]  justify-center ">
          
    <Card cardno={review[index]}/>

    <div className="flex gap-3 items-center my-3" >
          <buttton onClick={backHandler} >
             <IoIosArrowBack color='blue'/>
          </buttton>
          <buttton onClick={nextHandler}>
            <IoIosArrowForward color='blue'/>
          </buttton>
    </div>
    <div>
          <buttton className="px-3 py-2 text-black bg-blue-500 font-semibold rounded-md my-2" onClick={surpriseHandler}>Surprise Me</buttton>
    </div>
          
           
          
     
    </div>
  )
}
