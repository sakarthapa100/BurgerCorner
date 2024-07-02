import React from 'react'
import Deleveryimg from '@/public/images/delivery.svg'
import Image from 'next/image'
import { MdDirectionsBike } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";


const Delevery = () => {
  return (
   <section className='px-6 py-4 mt-36'>
<div className='w-[80%] mx-auto flex gird sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 '>
  {/* image */}
<div>
  <Image  src={Deleveryimg} alt="img" width={1400} height={900} />
</div>
{/* text */}
<div className=''>
<h1 className='heading '>YOUR 
 <span className='text-red-600 '> FAVORITE BURGER </span>  
  
  ON THE WAY</h1>

<p className='text-opacity-80 mt-7 text-lg '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sint provident necessitatibus voluptas temporibus est. Praesentium odit molestias repellendus, ab quos vel architecto!</p>
<div>
<div className='flex items-center space-x-3 mt-[2rem] '>
<MdDirectionsBike className='w-[2rem] h-[2rem] text-red-600 ' />
<h1 className='text-[18px] text-black font-medium px-5 py-3  '>Delivery in 30 minutes.</h1>
</div>

<div className='flex items-center space-x-3 mt-[1rem] '>
<IoFastFood className='w-[2rem] h-[2rem] text-red-600 ' />
<h1 className='text-[18px] text-black font-medium px-5 py-3  '>Free shiping on all order</h1>
</div>
<div className='flex items-center space-x-3 mt-[1rem]'>
<BsDoorOpen className='w-[2rem] h-[2rem] text-red-600 ' />
<h1 className='text-[18px] text-black font-medium px-5 py-3  '>Delivery on you door step</h1>
</div>
</div>
</div>


</div>

   </section>
  )
}

export default Delevery