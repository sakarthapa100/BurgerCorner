import React from 'react'
import TeamCard from './TeamCard'


const team = () => {
  return (
   <section className='mt-[12rem]  mb-3'>
    <div className='w-[80%] mx-auto'>
{/* heading */}
<div className='heading'>
  <h1>MEET OUR EXPERT
    <span className='text-red-600'> CHEFS  </span> 
     </h1>
</div>

{/* cards */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 '>
  <TeamCard image="/images/t1.jpg"
  name="John Doe"
  position="kitchen Porter"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro Lorem"
  />
   <TeamCard image="/images/t2.jpg"
  name="Kohn Doe
"
  position="Executive chef"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro Lorem"
  />
   <TeamCard image="/images/t3.jpg"
  name="Hohn Doe"
  position="Executive chef"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro Lorem"
  />



    </div>
</div>
   </section>
  )
}

export default team
