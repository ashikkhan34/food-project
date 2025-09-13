import React from 'react'
import img from '../assets/Image (1).png'
import img2 from '../assets/Image (2).png'
import img3 from '../assets/Image (3).png'
import img4 from '../assets/Image (4).png'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import { RiShoppingBagLine } from 'react-icons/ri'

export default function FeatureProduct() {
  return (
    <div>
        <div className='flex justify-between px-10 mt-10'>
            <h1 className='font-semibold text-4xl'>Feature Product</h1>
            <p className='flex gap-3 items-center text-sm text-green-500'>View All <FaArrowRight /></p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-1 mt-10'>
            <div className='w-[320px] h-[400px] border border-gray-300 rounded-sm mb-10'>
                <div className=' w-[320px] h-[250px] mb-10'>
                    {/* <div className='w-24 h-8 bg-red-400 rounded-sm mt-6 ml-4'>
                        <h1 className='text-white text-center pt-1'>Sale 50%</h1>
                    </div> */}
                    <img src={img} alt="" />
                    <div className='flex justify-between items-center px-5'>
                        <div>
                            <h1 className='text-gray-600 text-xl'>Green Apple</h1>
                            <p>$14.99 <span className='line-through text-gray-700'>$20.99</span></p>
                            <h1 className='flex'>
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-gray-700' />
                            </h1>
                        </div>
                        <div>
                            <div className='w-16 h-16 rounded-full relative bg-gray-300'>
                                <RiShoppingBagLine className=' absolute text-3xl ml-4 mt-4 text-gray-900' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-[320px] h-[400px] border border-gray-300 rounded-sm mb-10'>
                <div className=' w-[320px] h-[250px] mb-10'>
                    
                    <img src={img2} alt="" />
                    <div className='flex justify-between items-center px-5'>
                        <div>
                            <h1 className='text-gray-600 text-xl'>Chanise Cabbage</h1>
                            <p>$14.99 <span className='line-through text-gray-700'>$14.99</span></p>
                            <h1 className='flex'>
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-gray-700' />
                            </h1>
                        </div>
                        <div>
                            <div className='w-16 h-16 rounded-full relative bg-gray-300'>
                                <RiShoppingBagLine className=' absolute text-3xl ml-4 mt-4 text-gray-900' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-[320px] h-[400px] border border-green-500 shadow-2xl rounded-sm mb-10'>
                <div className=' w-[320px] h-[250px] mb-10'>
                    <div>

                    </div>
                    <img src={img3} alt="" />
                    <div className='flex justify-between items-center px-5'>
                        <div>
                            <h1 className='text-gray-600 text-xl'>Green Capsicum</h1>
                            <p>$14.99 <span className='line-through text-gray-700'>$14.99</span></p>
                            <h1 className='flex'>
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-gray-700' />
                            </h1>
                        </div>
                        <div>
                            <div className='w-16 h-16 rounded-full relative bg-green-500'>
                                <RiShoppingBagLine className=' absolute  text-3xl ml-4 mt-4 text-white' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-[320px] h-[400px] border border-gray-300 rounded-sm mb-10'>
                <div className=' w-[320px] h-[250px] mb-10'>
                  
                    <img src={img4} alt="" />
                    <div className='flex justify-between items-center px-5'>
                        <div>
                            <h1 className='text-gray-600 text-xl'>Ladies Finger</h1>
                            <p>$14.99 <span className='line-through text-gray-700'>$14.99</span></p>
                            <h1 className='flex'>
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-orange-400' />
                                <IoIosStar className='text-gray-700' />
                            </h1>
                        </div>
                        <div>
                            <div className='w-16 h-16 rounded-full relative bg-gray-300'>
                                <RiShoppingBagLine className=' absolute text-3xl ml-4 mt-4 text-gray-900' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            
        </div>
    </div>
  )
}
