import React from "react";

const About = () => {
  return (
    <>
      
       <div>
        <section className="mx-20">
          <h2 className="text-4xl font-bold text-blue-800 text-center mt-5 p-4">
            About Us
          </h2>
          <p className="mt-4 text-xl text-blue-800 " >
            Healthcare Hospital has been providing top-notch healthcare services
            for over 15 years. Our mission is to deliver compassionate and
            affordable care Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius mollitia autem assumenda, pariatur doloribus, sit cupiditate illo quo iure tenetur dolores odio error temporibus explicabo accusantium quas. Libero consequuntur sed porro blanditiis! Tempore, blanditiis doloribus? Sed sint saepe, distinctio laborum repellat assumenda quibusdam obcaecati architecto accusantium eius facere voluptatibus nemo error dignissimos enim, totam commodi sequi? Mollitia velit illum omnis.

          </p>
        </section>
      </div>


      <div
        className="grid md:grid-cols-4 grid-cols-2 mx-5 mt-5 mb-7 gap-6  "
      >
        <img src="/images/aboutimg1.jpg" alt="img1" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg2.webp" alt="img2" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg3.jpg" alt="img3" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg4.jpeg" alt="img4" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg2.webp" alt="img2" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg1.jpg" alt="img1" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg3.jpg" alt="img3" className="w-full h-40 object-cover"/>
        <img src="/images/aboutimg4.jpeg" alt="img4" className="w-full h-40 object-cover"/>
      </div>

     
    </>
  );
};

export default About;
