import React from 'react';
import logo from '../../media/logo.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
        <footer class="footer py-10 bg-footer xl:px-20 px-4 text-base-content">
            <aside>
                <img className='h-12' src={logo} alt="" />           
                <p className='text-base font-semibold text-secondary'>Elite Care Medical</p>
                <p className='text-base text-secondary'>Providing reliable health care since 1992</p>
            </aside> 
            <nav>
                <h6 class="footer-title text-base">Contact Us</h6> 
                <div className='flex md:flex-row'>
                    <FaLocationDot className="h-6 w-6" style={{ color: '#73726e' }}/>
                    <div className='text-base ml-2 text-secondary'>
                        <p>No. 17, Dutugemunu Road,</p>
                        <p>Pitakotte.</p>
                    </div>
                </div>
                <div className='flex md:flex-row'>
                    <FaPhoneAlt className="h-5 w-5" style={{ color: '#73726e' }}/>
                    <div className='text-base ml-2 text-secondary'>
                        <p>+94 11 2459 789</p>
                        <p>+94 77 7458 789</p>
                    </div>
                </div>
                <div className='flex md:flex-row'>
                    <MdEmail className="h-6 w-6" style={{ color: '#73726e' }}/>
                    <div className='text-base ml-2 text-secondary'>
                        <p>eltecaremedical@gmail.com</p>
                    </div>
                </div>
            </nav> 
            <nav>
                <h6 class="footer-title text-base">Social</h6>
                    <div className='flex md:flex-row gap-4'>
                        <a class="link link-hover"><FaFacebook className="h-9 w-9" style={{ color: '#73726e' }}/></a>
                        <a class="link link-hover"><FaInstagramSquare className="h-9 w-9" style={{ color: '#73726e' }}/></a>
                        <a class="link link-hover"><IoLogoLinkedin className="h-9 w-9" style={{ color: '#73726e' }}/></a>
                    </div>
            </nav>
        </footer>
        <footer class="footer footer-center p-4 bg-footer2 text-base-content">
            <aside>
                <p>Copyright © 2024 - All right reserved.</p>
            </aside>
        </footer>
    </div>
  )
}

export default Footer