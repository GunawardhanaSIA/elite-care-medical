import React from 'react';
import logo from "../../media/logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import '../../App.css';

const Navbar = () => {
    const navItems = (
        <>
            <li><a>Home</a></li>
            <li><a>Make an Appointment</a></li>
        </>
    )

  return (
    <header className='max-w-screen-2xl container mx-auto'>
        <div className="navbar xl:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <a href='/'>
                    <img className='h-12' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-semibold" style={{ color: '#73726e' }}>
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
                    <button className="btn btn-ghost btn-circle">
                        <FaRegCircleUser className="h-7 w-7" style={{ color: '#73726e' }}/>
                    </button>
                </div>
                <a className="btn bg-primary rounded-box px-5 text-white">Login</a>
            </div>
        </div>
    </header>
  )
}

export default Navbar