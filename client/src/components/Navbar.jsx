import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
    return (
        <div className='px-10 py-2 shadow-md'>
            <div className='flex items-center justify-between px-3 py-2 '>
                <div>
                    <img src={logo} width={110} height={80} alt="logo" />
                </div>
                <div>
                    <ul className='flex items-center gap-6 text-gray-700'>
                        {['Home', 'About Calmed', 'Paper & Resources', 'Our Partners', 'Gallery', 'Who are We'].map((item) => (
                            <li key={item} className="relative group cursor-pointer">
                                <span className="group-hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className='border-2 px-3 py-2 bg-blue-50 border-blue-200'>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar