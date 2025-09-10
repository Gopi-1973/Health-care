import React from 'react'

const Booking = () => {
  return (
    <>
      <section className='p-6 max-w-xl mx-auto '>
          <h2 className='text-3xl font-semibold text-blue-700 text-center my-8' >Book an Appointment</h2>
          <form className='bg-blue-50 p-4 rounded shadow-xl space-y-4'>
            <input type="text"
            placeholder='Your full name'
            className='w-full p-2 border border-blue-400' />
            <input type="email"
            placeholder='Your Email'
            className='w-full p-2 border 
            border-blue-400' />
            <input type="number"
            placeholder='Your Number'
            className='w-full p-2 border 
            border-blue-400' />
            <select className="w-full p-2 border border-blue-400 rounded text-gray-500" >
                <option>Select Service</option>
                <option>OPD</option>
                <option>Emergency</option>
                <option>Pharmacy</option>
            </select>
           <button type='submit' className='w-full bg-blue-700 text-white py-2 rounded-l'>Book Now</button>
          </form>
       </section>  
    </>
  )
}

export default Booking