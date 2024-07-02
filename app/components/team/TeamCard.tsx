import React from 'react'
import Image from 'next/image'    
interface Props {
  image: string,
  name: string,
  position: string,
  description: string
}

const TeamCard = ({image, name, position, description}:Props) => {
  return (
    <div className='bg-white-600 px-6 py-4 mt-8  '>
      {/* imgae */}
      <div className=' rounded-lg'>
        <Image src={image} alt={name} width={380} height={350} className='rounded-lg mx-auto' />
      </div>

<div>
  <h1 className='text-center font-bold text-[1.8rem] mt-2 '>{name} </h1>

  <div className="flex justify-center mt-3">
  <p className='bg-green-600 px-3 py-1 text-white font-semibold inline-block'>
    {position}
  </p>
</div>


  <p className='mt-5 text-center text-[1.1rem] '>{description}</p>
</div>

    </div>
  )
}

export default TeamCard