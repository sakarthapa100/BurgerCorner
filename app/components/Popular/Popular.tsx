"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Popular = () => {
  return (
    <div className='mt-6 mb-5'>
      <h1 className='heading'>Our Popular <span className='text-red-600'>Burgers</span></h1>
      <div className='w-[89%] mt-[4rem] mx-auto '>
        <Carousel 
          additionalTransfrom={0} 
          arrows 
          autoPlay 
          autoPlaySpeed={4000} 
          centerMode={false} 
          infinite 
          responsive={responsive} 
          itemClass='item' 
          showDots={false}
        >
          <BurgerCard 
            title="Best Burgers"
            image="/images/b1.png"
            reviews="4.5"
            price="10"
          />
          <BurgerCard 
            title="Best Burgers"
            image="/images/b2.png"
            reviews="4.5"
            price="10"
          />
          <BurgerCard 
            title="Best Burgers"
            image="/images/b3.png"
            reviews="4.5"
            price="10"
          />
          <BurgerCard 
            title="Best Burgers"
            image="/images/b4.png"
            reviews="4.5"
            price="10"
          />
           <BurgerCard 
            title="Best Burgers"
            image="/images/b5.png"
            reviews="4.5"
            price="10"
          />
 <BurgerCard 
            title="Best Burgers"
            image="/images/b6.png"
            reviews="4.5"
            price="10"
          />
           <BurgerCard 
            title="Best Burgers"
            image="/images/b7.png"
            reviews="4.5"
            price="10"
          />

<BurgerCard 
            title="Best Burgers"
            image="/images/b8.png"
            reviews="4.5"
            price="10"
          />
 <BurgerCard 
            title="Best Burgers"
            image="/images/b9.png"
            reviews="4.5"
            price="10"
          />

        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
