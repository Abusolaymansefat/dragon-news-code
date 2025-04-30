import React from 'react';
import logo from"../../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-10 gap-4'>
            <img className='w-[350px]' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;