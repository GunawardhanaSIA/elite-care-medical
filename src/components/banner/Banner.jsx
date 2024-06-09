import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-white to-gradient1'>
        <div className='py-20 flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <h2 className='md:text-5xl text-3xl font-bold md:leading-snug text-secondary'>Meet</h2>
                <h2 className='md:text-4xl text-3xl font-semibold md:leading-snug text-primary py-4'>Dr. Ananda Gunawardhana</h2>
                <p className='text-xl text-secondary'>General Physician</p>
                <p className='text-xl text-secondary'>National Hospital - Colombo</p>
            </div>
            <div className='md:w-1/2 max-w-full'>
                <div class="avatar-group -space-x-12 rtl:space-x-reverse">
                    <div class="avatar">
                        <div class="w-80">
                        <img src="https://impeccabuild.com.au/wp-content/uploads/2020/07/Medical-Clinic-Interior-Design-Ideas-Medical-Fitouts-ImpeccaBuild-3-scaled.jpg" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-80">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner