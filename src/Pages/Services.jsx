import React from "react";

const Services = () => {
  return (
    <>
      <section className="p-6 mx-20">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6 ">
          <div className="bg-blue-200 rounded shadow -md text-center p-5 text-blue-700 text-xl ">
            <h2>Emergency </h2>
            <p>24/7 ambulance and emergency room service with expert care.</p>
          </div>
          <div className="bg-blue-200 p-5 rounded shadow-md text-center  text-blue-700">
            <h2 className="text-xl font-semibold">Outpatient (OPD)</h2>
            <p>
              Consult with general physicians and specialists without admission.
            </p>
          </div>
          <div className="bg-blue-200 p-5 rounded shadow-md text-center  text-blue-700">
            <h3 className="text-xl font-semibold">Pharmacy</h3>
            <p>Fully stocked in-house pharmacy with prescribed medications.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-200 p-5 rounded shadow-md text-center  text-blue-700">
            <h3 className="text-xl font-semibold">Laboratory</h3>
            <p>
              Accurate and timely lab testing services including blood, urine,
              and more.
            </p>
          </div>
          <div className="bg-blue-200 p-5 rounded shadow-md text-center  text-blue-700">
            <h3 className="text-xl font-semibold">Specialist Care</h3>
            <p>
              Experienced doctors across cardiology, gynecology, pediatrics, and
              more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
