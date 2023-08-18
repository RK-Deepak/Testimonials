import React from 'react'
import { IoIosQuote } from "react-icons/io";
import { IoMdQuote} from "react-icons/io";

export default function Card(props) {
          let card=props.cardno;
  return (
    <div className="relative w-full ">
      <div className="absolute -top-[140px] left-[23px] w-[150px] h-[150px] bg-blue-500 rounded-full">
      <img src={card.image} alt="" className="rounded-full w-[125px] aspect-square"></img>
      </div>
      <div >
          <div className="flex items-center justify-center flex-col gap-[1.7rem]">
                    <div className="text-center">
                    <h1 className="font-bold text-black text-lg">{card.name}</h1>
                    <h1 className="text-blue-200 font-bold text-lg">{card.job}</h1>
                    </div>
                   
                    <IoMdQuote color='blue'/>
                    <p>{card.text}</p>
                    <IoIosQuote color='blue'/>
                    
          </div>
      </div>
    </div>
  )
}
