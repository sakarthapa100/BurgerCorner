import React from 'react'
import Delevery from './Delevery/Delevery'
import Hero from './Hero/Hero'
import Feature from './Feature/Feature'
import Popular from './Popular/Popular'
import Team from './team/Team'
import Reservation from './Reservation/Reservation'
import NewsLetter from './NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      
<Hero />
<Feature />
<Popular />
<Delevery />
<Team />
<Reservation />
<NewsLetter />
    </div>
  )
}

export default Home