import React from 'react'
import icon1 from '../assets/Icon (1).png'
import icon2 from '../assets/Icon (2).png'
import icon3 from '../assets/Icon (3).png'
import icon from '../assets/Icon.png'

export default function Support() {
  return (
    <>
    <div className='flex justify-around'>
        <div className='w-72 h-52  mb-10'>
            <div className='mt-10 justify-center items-center text-center'>
                <img className='ml-28' src={icon} alt="" />
                <h1 className='font-semibold text-xl mt-3'>Free Shipping</h1>
                <p className='font-sm text-gray-500'>Free shipping with discount</p>
            </div>

        </div>
        <div className='w-72 h-52  mb-10'>
            <div className='mt-10 justify-center items-center text-center'>
                <img className='ml-28' src={icon1} alt="" />
                <h1 className='font-semibold text-xl mt-3'>Great Support 24/7</h1>
                <p className='font-sm text-gray-500'>Instant access to Contact</p>
            </div>

        </div>
        <div className='w-72 h-52  mb-10'>
            <div className='mt-10 justify-center items-center text-center'>
                <img className='ml-28' src={icon2} alt="" />
                <h1 className='font-semibold text-xl mt-3'>100% Sucure Payment</h1>
                <p className='font-sm text-gray-500'>We ensure your money is save</p>
            </div>

        </div>
        <div className='w-72 h-52  mb-10'>
            <div className='mt-10 justify-center items-center text-center'>
                <img className='ml-28' src={icon3} alt="" />
                <h1 className='font-semibold text-xl mt-3'>Money-Back Guarantee</h1>
                <p className='font-sm text-gray-500'>30 days money-back</p>
            </div>
            

        </div>
        
    </div>
    <hr className='-mt-10 w-[94%] mx-auto text-gray-400' />
    </>
  )
}
