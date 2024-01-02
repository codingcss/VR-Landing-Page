/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// import components
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header className="py-6" data-aos='fade-down' data-aos-duration='2000' data-aos-delay='900' >
      <div className=" container mx-auto " >
        <div className="flex items-center justify-between" >
          {/* Logo */}
          <a href="#" >
            <img src={Logo} alt="logo" className="h-[30px]" />
          </a>
          {/* Nav */}
          <Nav />
          {/* Nav mobile btn */}
          <HiMenu onClick={() => setNavMobile(true)} className=" lg:hidden text-3xl text-white cursor-pointer "/>
        </div>
      </div>
    </header>
  );
};

export default Header;
