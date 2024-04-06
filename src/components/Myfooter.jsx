import Image from "next/image";
import logo from '../../public/assets/images/footerlogo.png';
import ellipse from '../../public/assets/images/ellipse2.png'
import { Facebook, Insta, Twitter, Linkedin } from './Icons'

export default function Myfooter() {
    return (
        <>
            <div className="relative z-[2]" id="blog" >
                <div className="max-w-[1140px] px-3 xl:mx-auto mx-2 sm:mx-5 bg-newsletter py-12 md:h-[318px] rounded-[20px] flex items-center justify-center flex-col translate-y-[29%] ">
                    <h2 className=" font-Outfit font-light text-[32px] md:text-[48px] text-[#FDFDFF] text-center leading-[33px]">Subscribe to our <span className="font-semibold"> Newsletter!</span></h2>
                    <p className="font-Exo 2 font-normal text-[14px] md:text-[16px] text-[#FDFDFF] pt-3 text-center">Be the first to get exclusive offers and the latest news.</p>
                    <form className="w-[314px] sm:w-[448px] p-2 sm:p-[10px_10px_10px_24px] bg-[#FFFFFF0D] border border-[#FDFDFF33] flex justify-between mt-4 md:mt-9 rounded-[6px]">
                        <input type="text" placeholder="Enter your email" className=" !w-[140px] sm:!w-full placeholder:text-[#FDFDFF] text-[#FDFDFF] font-Outfit text-[14px] md:text-[16px] font-semibold bg-transparent border-none outline-none" />
                        <button className="sm:text-[16px] text-[14px] font-semibold font-Outfit hover:bg-white hover:text-[#9257D8] duration-[0.5s] text-[#FDFDFF] p-[4px_8px] sm:p-[12px_22px] border rounded-[4px] border-[#FDFDFF]">Subscribe</button>
                    </form>
                </div>
                <div className=" bg-footerbg bg-cover bg-no-repeat bg-center lg:bg-Size py-5">
                    <div className="max-w-[1140px] mx-auto px-3 pt-28 md:pt-36 pb-16">
                        <div className="flex flex-row flex-wrap">
                            <div className="md:w-8/12 w-full">
                                <a href=""><Image src={logo} className="max-lg:w-[50%]" alt="logo" width={241.94} height={42} /></a>
                                <p className="font-normal text-[14px] md:text-[16px] font-Exo 2 text-white pt-7">Follow Us</p>
                                <div className="flex items-center gap-2 pt-2">
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://www.facebook.com/" target="_blank" className="group ">
                                            <Facebook/>
                                        </a>
                                    </span>
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://www.instagram.com/accounts/login/" target="_blank" className="group ">
                                            <Insta/>
                                        </a>
                                    </span>
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank" className="group ">
                                           <Twitter/>
                                        </a>
                                    </span>
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://www.linkedin.com/pulse/road-map-front-end-developer-chandrashekhar-m" target="_blank" className="group ">
                                            <Linkedin/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="md:w-4/12 w-full pt-10 md:pt-0">
                                <div className="flex flex-row flex-wrap">
                                    <div className="w-1/2">
                                        <ul>
                                            <li className="font-semibold font-Outfit text-[14px] md:text-[16px] text-white">Maine</li>
                                            <li className="pt-3"><a href="#home" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4] hover:text-white duration-300 ">Home</a></li>
                                            <li className="pt-3"><a href="#aboutus" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4]  hover:text-white duration-300">About Us</a></li>
                                            <li className="pt-3"><a href="#aboutus" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4]  hover:text-white duration-300">services</a></li>
                                            <li className="pt-3"><a href="#whychooseus" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4] hover:text-white duration-300">Why Choose Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul>
                                            <li className="font-semibold font-Outfit text-[14px] md:text-[16px] text-white">Legal</li>
                                            <li className="pt-3"><a href="#contactus" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4] hover:text-white duration-300 text-nowrap">Term & Conduction</a></li>
                                            <li className="pt-3"><a href="#blog" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4]  hover:text-white duration-300">Privacy Policy</a></li>
                                            <li className="pt-3"><a href="#contactus" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4]  hover:text-white duration-300">Contact</a></li>
                                            <li className="pt-3"><a href="tel:+6494461709" className="font-normal font-Outfit text-[14px] md:text-[16px] text-[#B7B7B4] hover:text-white duration-300">(629) 555-0129</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#FFFFFF4D]"></div>
                    <p className="text-center font-Exo 2 text-[14px] font-normal text-[#B8B8B4] pt-4 pb-1">© Copyright 2024 Noble Mind | All rights reserved. </p>
                </div>
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute top-[0%] left-[2%] z-[-1] hidden md:block" />
            </div>
        </>
    )
}