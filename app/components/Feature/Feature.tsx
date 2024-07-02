import React from 'react'
import Burger1 from '@/public/images/f1.jpg'
import Burger2
 from '@/public/images/f2.jpg'
import Burger3 from '@/public/images/f3.jpg'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='pt-20 pb-8 '>
     <h1 className='heading'>BURGERS MADE WITH
   <span className='text-red-600'>   LOVE </span>   
     AND  
     <span className='text-yellow-500'>  CARE  </span> 
     
     </h1>
     <div className='w-[90%] md:w-[80%] mt-12 md:mt-24  mb-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  '>
{/* 1st card */}
<div className='p-6 hover:bg-red-500 rounded-lg transition-all duration-200 '>
<div className=' '>
 <Image src={Burger1} alt="img" className='rounded-3xl' />
</div>
<h1 className='mt-10 text-2xl  font-bold items-center justify-center flex '>Best Quality</h1>

<p className='mt-2 text-opacity-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste praesentium sit in autem velit, voluptates ex dolorum ea necessitatibus!</p>

</div>
{/* 2nd card */}
{/* 1st card */}
<div className='p-6 hover:bg-red-500 rounded-lg transition-all duration-200 lg:translate-y-9 '>
<div className=' '>
 <Image src={Burger2} alt="img" className='rounded-3xl' />
</div>
<h1 className='mt-10 text-2xl font-bold items-center justify-center flex '>Chicken Burgers
</h1>

<p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste praesentium sit in autem velit, voluptates ex dolorum ea necessitatibus!</p>

</div>
{/* 2nd card */}
{/* 1st card */}
<div className='p-6 hover:bg-red-500 rounded-lg transition-all duration-200 '>
<div className=' '>
 <Image src={Burger3} alt="img" className='rounded-3xl' />
</div>
<h1 className='mt-10 text-2xl font-bold items-center justify-center flex '>Your Opinion is Important
</h1>


<p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste praesentium sit in autem velit, voluptates ex dolorum ea necessitatibus!</p>

</div>
     </div>
    </div>
  )
}

export default Feature