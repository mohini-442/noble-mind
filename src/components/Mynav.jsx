"use client";
import { useState } from "react";
import logo from '../../public/assets/images/logo.webp';
import Image from "next/image";
import Button from "./Button";

export default function Mynav() {
    const [show, setshow] = useState(true);
    function nav() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden")
    }
    return (
        <>
            <div className="">
                <div className="max-w-[1140px] !xxl:max-w-[1440px] mx-auto pt-[19px] px-3">
                    <div className=" flex justify-between items-center ">
                        <a href=""><Image src={logo} className="max-lg:w-[70%] relative z-10" alt="logo" height={38.43} width={221.86} /></a>
                        <div className="flex gap-[136px]">
                            <ul
                                className={`flex items-center gap-6 mobileView ${show ? "right-[-100%]" : "right-0"}`} >
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute  after:left-0 after:bg-[#000000] after:h-[2px] font-Exo relative after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#5A594D] hover:text-[#131200] text-[16px] font-normal leading-normal no-underline"
                                        href="#home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#5A594D] hover:text-[#131200] font-Exo text-[16px] font-normal leading-normal no-underline"
                                        href="#aboutus"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:bg-[#000000] after:h-[2px]  relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#5A594D] hover:text-[#131200] font-Exo text-[16px] font-normal leading-normal no-underline"
                                        href="#aboutus"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#5A594D] hover:text-[#131200] font-Exo text-[16px] font-normal leading-normal no-underline"
                                        href="#whychooseus"
                                    >
                                        Why Choose Us
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:bg-[#000000] after:h-[2px]  relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#5A594D] hover:text-[#131200] font-Exo text-[16px] font-normal leading-normal no-underline"
                                        href="#blog"
                                    >
                                        Blogs
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute  after:bg-[#000000] after:h-[2px]  relative after:left-[0] after:bottom-[-2px] after:rounded-[19px] after:transition-all after:duration-300 after:ease-linear text-[#5A594D] hover:text-[#131200] font-Exo text-[16px] font-normal leading-normal no-underline"
                                        href="#faq"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <Button btn='Contact Us' /></li>
                            </ul>
                        </div>
                        <label className=" lg:hidden" onClick={nav}>
                            {show ? (
                                <div className="z-20 relative pl-2">
                                    <span className="flex bg-[#000] h-[3px] rounded-3xl duration-300 w-6"></span>
                                    <span className="flex bg-[#000] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                    <span className="flex bg-[#000] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                </div>
                            ) : (
                                <div className="z-20 relative">
                                    <span className="flex bg-[#000] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                    <span className="flex bg-[#000] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
