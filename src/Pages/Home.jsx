import React from 'react'
import About from './About'
import Services from './Services'
import Booking from './Booking'

const Home = () => {
  return (
    <div className='bg-blue-100 '>
    <div>
      <img src="/images/aboutimg2.webp" alt="img" className='w-4xl mx-auto py-5 '/>
    </div>
    <div>
        <section className='bg-blue-100 text-center text-3xl font-bold text-blue-800 '>
            <h1>Welcome to Healthcare Hospital.</h1>
            <p>Your health, our priority.<br/> We provide 24/7 <br/>Emergency Services, OPD, Lab, and Specialist Care</p>
        </section>
        </div>
        <About/>
        <Services/>
        <Booking/>

    </div>
  )
}

export default Home