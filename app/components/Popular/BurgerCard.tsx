import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaShoppingBag } from "react-icons/fa";

interface Props {
  title: string,
  image: string,
  reviews: string,
  price: string
}

const BurgerCard = ({ title, image, reviews, price }: Props) => {
  return (
    <div className='bg-red-500 p-8 rounded-lg m-12 w-[18rem] mt-12'>
      {/* image */}
      <div className='w-[200px] mx-auto h-[200px]'>
        <Image src={image} alt={title} width={250} height={250} className='w-full h-full object-cover' />
      </div>
      {/* title */}
      <h1 className='mt-[1.3rem] text-[22px] text-black font-semibold'>{title}</h1>
      <div className='flex items-center mt-[0.5rem] space-x-3'>
        <div className='flex items-centermt-[0.5rem] space-x-3'>
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />  
          <FaStar className='text-yellow-500' />
        </div>
        {/* reviews */}
        <div className='text-black opacity-80'>({reviews})</div>
      </div>
      <p className='mt-[0.5rem] text-black text-opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, possimus dolorem?</p>
      <div className='flex mt-[1.4rem] items-center justify-between'>
        <h1 className='text-[22px] font-bold'>Rs:{price}</h1>
        <button className='px-4 py-2 hover:bg-green-600 transition-all duration-200 text-white rounded-lg bg-blue-600'>
          <FaShoppingBag className='text-3xl' />
        </button>
      </div>
    </div>
  );
}

export default BurgerCard;
