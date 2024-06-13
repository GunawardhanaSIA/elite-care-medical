import React from 'react'

const Reviews = () => {
  const ratings = (
    <>
        <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" checked />
        <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" class="mask mask-star bg-orange-400" />
    </>
  )

  return (
    <div>
        <div className='section-container'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-12 py-20'>
                <div className='md:w-1/3'>
                    <h2 className='md:text-3xl text-2xl font-semibold md:leading-snug text-[#6d6f70]'>Reviews</h2>  
                    <div className='flex md:flex-row items-start gap-5 mt-5'>
                      <h2 className='md:text-3xl font-bold text-3xl md:leading-snug text-[#6d6f70]'>4.8</h2> 
                      <div className="rating pt-1.5">
                        {ratings}
                      </div>
                    </div>
                    <a href="#" className='text-xs underline text-secondary'><p>81 reviews</p></a>    
                    <div className='mt-3'>
                      <div class="flex items-center">
                        <span class="mr-2 text-[#6d6f70]">5</span>
                        <progress class="progress progress-warning w-60 h-3" value="80" max="100"></progress>
                      </div>
                      <div class="flex items-center">
                        <span class="mr-2 text-[#6d6f70]">4</span>
                        <progress class="progress progress-warning w-60 h-3" value="30" max="100"></progress>
                      </div>
                      <div class="flex items-center">
                        <span class="mr-2 text-[#6d6f70]">3</span>
                        <progress class="progress progress-warning w-60 h-3" value="0" max="100"></progress>
                      </div>
                      <div class="flex items-center">
                        <span class="mr-2 text-[#6d6f70]">2</span>
                        <progress class="progress progress-warning w-60 h-3" value="0" max="100"></progress>
                      </div>
                      <div class="flex items-center">
                        <span class="mr-2 text-[#6d6f70] pl-0.5">1</span>
                        <progress class="progress progress-warning w-60 h-3" value="0" max="100"></progress>
                      </div>
                    </div>
                    <button class="btn mt-5 bg-white text-primary border-primary">Write a Review</button>
                </div>
                <div className='md:w-2/3'>
                  <div class="overflow-x-auto">
                    <table class="table w-full border-collapse">
                      <tbody>     
                        <tr className='flex flex-col md:flex-row'>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                  <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Ruchira Jayawickrama</div>
                                <div className="rating text-xs pt-1.5">
                                  {ratings}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Dr. Ananda Gunawardhana at Elite Care Medical is amazing! He truly listens and cares. The clinic is modern and welcoming. Highly recommend!
                          </td>
                        </tr>
                      </tbody>   
                      <tbody>     
                        <tr className='flex flex-col md:flex-row'>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                  <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Kasun Gunawardhana</div>
                                <div className="rating text-xs pt-1.5">
                                  {ratings}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Dr. Ananda Gunawardhana is wonderful! Elite Care Medical offers great service and a friendly atmosphere. Highly recommend this clinic!
                          </td>
                        </tr>
                      </tbody>   
                      <tbody>     
                        <tr className='flex flex-col md:flex-row'>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                  <img src="https://onlineprofilepros.com/wp-content/uploads/2017/12/profile-photo.jpeg" alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Dilki Perera</div>
                                <div className="rating text-xs pt-1.5">
                                  {ratings}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Elite Care Medical is excellent. Dr. Ananda Gunawardhana is thorough and caring. The clinic is clean and efficient. Highly satisfied!
                          </td>
                        </tr>
                      </tbody>   
                      <tbody>     
                        <tr className='flex flex-col md:flex-row'>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                  <img src="https://static.vecteezy.com/system/resources/previews/001/852/304/non_2x/portrait-of-a-woman-smiling-free-photo.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Hart Hagerty</div>
                                <div className="rating text-xs pt-1.5">
                                  {ratings}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                          Fantastic experience at Elite Care Medical. Dr. Ananda Gunawardhana is knowledgeable and compassionate. The staff is friendly and professional.                   
                          </td>
                        </tr>
                      </tbody>    
                    </table>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews