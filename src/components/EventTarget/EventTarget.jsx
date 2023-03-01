import React from 'react'
import { FaRecycle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const EventTarget = () => {


    return (

        <div className='flex items-center  gap-12 '>
            <figure className='inline-block bg-lime-500 p-5 rounded-full text-white border-8 border-white'>
                <FaRecycle className='text-7xl' />
            </figure>
            <div className=' w-full flex  gap-12 hover:bg-lime-500  hover:text-white rounded-xl'>
                <div className='flex flex-col '>
                    <p className='text-lime-500 text-6xl'>30</p>
                    <p className='text-lime-500 text-4xl'>mar</p>
                </div>
                <div className='text-left '>
                    <p className='font-light text-gray-400'>Organizador <span className='text-lime-500'>RROP</span> </p>
                    <h3 className='text-3xl'>CÓMO RECICLAR</h3>
                    <div className='flex items-center'>
                        <figure>
                            <CiLocationOn />
                        </figure>
                        <p>Teatro Medellin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventTarget;