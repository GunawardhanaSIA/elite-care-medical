import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.denverhealthmedicalplan.org/sites/default/files/styles/full_width/public/2023-03/GettyImages-1312806602%20%281%29_0.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h2 className="mb-5 text-5xl font-semibold">Welcome to Elite Care Medical</h2>
                    <p className="mb-5">At Elite Care Medical, we provide exceptional healthcare with a personal touch. Our team of experienced professionals is dedicated to offering comprehensive medical services tailored to your needs.</p>
                    <button className="btn bg-primary rounded-box px-5 text-white border-none">Make an Appointment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero