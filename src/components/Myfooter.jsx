import Image from "next/image";
import logo from '../../public/assets/images/footerlogo.png';
import ellipse from '../../public/assets/images/ellipse2.png'

export default function Myfooter() {
    return (
        <>
            <div className="relative z-[2]" id="blog" >
                <div className="max-w-[1140px] px-3 xl:mx-auto mx-2 sm:mx-5 bg-newsletter py-12 md:h-[318px] rounded-[20px] flex items-center justify-center flex-col translate-y-[29%] ">
                    <h2 className=" font-Outfit font-light text-[32px] md:text-[48px] text-[#FDFDFF] text-center leading-[33px]">Subscribe to our <span className="font-semibold"> Newsletter!</span></h2>
                    <p className="font-Exo 2 font-normal text-[14px] md:text-[16px] text-[#FDFDFF] pt-2 text-center">Be the first to get exclusive offers and the latest news.</p>
                    <form className="w-[314px] sm:w-[448px] p-2 sm:p-[10px_10px_10px_24px] bg-[#FFFFFF0D] border border-[#FDFDFF33] flex justify-between mt-4 md:mt-9 rounded-[6px]">
                        <input type="text" placeholder="Enter your email" className=" !w-[140px] sm:!w-full placeholder:text-[#FDFDFF] text-[#FDFDFF] font-Outfit text-[14px] md:text-[16px] font-semibold bg-transparent border-none outline-none" />
                        <button className="sm:text-[16px] text-[14px] font-semibold font-Outfit hover:bg-white hover:text-[#9257D8] duration-[0.5s] text-[#FDFDFF] p-[4px_8px] sm:p-[12px_22px] border rounded-[4px] border-[#FDFDFF]">Subscribe</button>
                    </form>
                </div>
                <div className=" bg-footerbg bg-cover bg-no-repeat bg-center lg:bg-Size py-5">
                    <div className="max-w-[1140px] mx-auto px-3 pt-28 md:pt-36 pb-16">
                        <div className="flex flex-row flex-wrap">
                            <div className="md:w-8/12 w-full">
                                <a href=""><Image src={logo} className="max-lg:w-[65%]" alt="logo" width={241.94} height={42} /></a>
                                <p className="font-normal text-[14px] md:text-[16px] font-Exo 2 text-white pt-7">Follow Us</p>
                                <div className="flex items-center gap-2 pt-2">
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://www.facebook.com/" target="_blank" className="group ">
                                            <svg className="group-hover:fill-white duration-300" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="21.5" stroke="#FDFDFF" />
                                                <path className="group-hover:fill-black " d="M24 23.5H26.5L27.5 19.5H24V17.5C24 16.47 24 15.5 26 15.5H27.5V12.14C27.174 12.097 25.943 12 24.643 12C21.928 12 20 13.657 20 16.7V19.5H17V23.5H20V32H24V23.5Z" fill="#FDFDFF" />
                                            </svg>
                                        </a>
                                    </span>
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://www.instagram.com/accounts/login/" target="_blank" className="group ">
                                            <svg className="group-hover:fill-white duration-300" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="21.5" stroke="#FDFDFF" />
                                                <path className="group-hover:fill-black " d="M23.0286 12.0012C23.7583 11.9984 24.488 12.0058 25.2176 12.0232L25.4116 12.0302C25.6356 12.0382 25.8566 12.0482 26.1236 12.0602C27.1876 12.1102 27.9136 12.2782 28.5506 12.5252C29.2106 12.7792 29.7666 13.1232 30.3226 13.6792C30.831 14.1788 31.2244 14.7832 31.4756 15.4502C31.7226 16.0872 31.8906 16.8142 31.9406 17.8782C31.9526 18.1442 31.9626 18.3662 31.9706 18.5902L31.9766 18.7842C31.9943 19.5134 32.002 20.2428 31.9996 20.9722L32.0006 21.7182V23.0282C32.003 23.758 31.9954 24.4877 31.9776 25.2172L31.9716 25.4112C31.9636 25.6352 31.9536 25.8562 31.9416 26.1232C31.8916 27.1872 31.7216 27.9132 31.4756 28.5502C31.2252 29.218 30.8317 29.8228 30.3226 30.3222C29.8225 30.8306 29.2179 31.224 28.5506 31.4752C27.9136 31.7222 27.1876 31.8902 26.1236 31.9402C25.8566 31.9522 25.6356 31.9622 25.4116 31.9702L25.2176 31.9762C24.4881 31.994 23.7583 32.0017 23.0286 31.9992L22.2826 32.0002H20.9736C20.2438 32.0027 19.5141 31.995 18.7846 31.9772L18.5906 31.9712C18.3532 31.9626 18.1158 31.9526 17.8786 31.9412C16.8146 31.8912 16.0886 31.7212 15.4506 31.4752C14.7833 31.2246 14.1788 30.8311 13.6796 30.3222C13.1706 29.8225 12.7768 29.2178 12.5256 28.5502C12.2786 27.9132 12.1106 27.1872 12.0606 26.1232C12.0494 25.8859 12.0394 25.6486 12.0306 25.4112L12.0256 25.2172C12.0071 24.4877 11.9988 23.758 12.0006 23.0282V20.9722C11.9978 20.2428 12.0051 19.5134 12.0226 18.7842L12.0296 18.5902C12.0376 18.3662 12.0476 18.1442 12.0596 17.8782C12.1096 16.8132 12.2776 16.0882 12.5246 15.4502C12.7759 14.7829 13.1705 14.1787 13.6806 13.6802C14.1795 13.171 14.7835 12.7768 15.4506 12.5252C16.0886 12.2782 16.8136 12.1102 17.8786 12.0602L18.5906 12.0302L18.7846 12.0252C19.5138 12.0068 20.2432 11.9985 20.9726 12.0002L23.0286 12.0012ZM22.0006 17.0012C21.3381 16.9919 20.6803 17.1143 20.0656 17.3613C19.4508 17.6083 18.8912 17.9751 18.4194 18.4403C17.9476 18.9055 17.573 19.4598 17.3173 20.071C17.0616 20.6822 16.9299 21.3382 16.9299 22.0007C16.9299 22.6633 17.0616 23.3192 17.3173 23.9305C17.573 24.5417 17.9476 25.096 18.4194 25.5612C18.8912 26.0264 19.4508 26.3931 20.0656 26.6402C20.6803 26.8872 21.3381 27.0096 22.0006 27.0002C23.3267 27.0002 24.5984 26.4734 25.5361 25.5358C26.4738 24.5981 27.0006 23.3263 27.0006 22.0002C27.0006 20.6741 26.4738 19.4024 25.5361 18.4647C24.5984 17.527 23.3267 17.0012 22.0006 17.0012ZM22.0006 19.0012C22.3991 18.9939 22.7951 19.066 23.1654 19.2134C23.5357 19.3608 23.8729 19.5806 24.1574 19.8598C24.4418 20.139 24.6678 20.4721 24.822 20.8396C24.9763 21.2071 25.0558 21.6016 25.0558 22.0002C25.0559 22.3988 24.9766 22.7934 24.8224 23.1609C24.6683 23.5285 24.4424 23.8617 24.1581 24.141C23.8737 24.4203 23.5366 24.6401 23.1663 24.7876C22.796 24.9352 22.4001 25.0074 22.0016 25.0002C21.2059 25.0002 20.4429 24.6842 19.8803 24.1216C19.3176 23.5589 19.0016 22.7959 19.0016 22.0002C19.0016 21.2046 19.3176 20.4415 19.8803 19.8789C20.4429 19.3163 21.2059 19.0002 22.0016 19.0002L22.0006 19.0012ZM27.2506 15.5012C26.928 15.5141 26.6229 15.6514 26.3992 15.8842C26.1755 16.117 26.0506 16.4274 26.0506 16.7502C26.0506 17.0731 26.1755 17.3834 26.3992 17.6163C26.6229 17.8491 26.928 17.9863 27.2506 17.9992C27.5821 17.9992 27.9 17.8675 28.1345 17.6331C28.3689 17.3987 28.5006 17.0808 28.5006 16.7492C28.5006 16.4177 28.3689 16.0998 28.1345 15.8653C27.9 15.6309 27.5821 15.4992 27.2506 15.4992V15.5012Z" fill="#FDFDFF" />
                                            </svg>
                                        </a>
                                    </span>
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank" className="group ">
                                            <svg className="group-hover:fill-white duration-300" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="21.5" stroke="#FDFDFF" />
                                                <path className="group-hover:fill-black " d="M28.205 12.25H31.513L24.286 20.51L32.788 31.75H26.13L20.916 24.933L14.95 31.75H11.64L19.37 22.915L11.215 12.25H18.04L22.753 18.481L28.203 12.25H28.205ZM27.044 29.77H28.877L17.045 14.126H15.078L27.044 29.77Z" fill="white" />
                                            </svg>
                                        </a>
                                    </span>
                                    <span className=" hover:translate-y-[-6%] duration-[0.5s]">
                                        <a href="https://www.linkedin.com/pulse/road-map-front-end-developer-chandrashekhar-m" target="_blank" className="group ">
                                            <svg className="group-hover:fill-white duration-300" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="21.5" stroke="#FDFDFF" />
                                                <path className="group-hover:fill-black" d="M16.9414 15C16.9411 15.5305 16.7302 16.0391 16.3549 16.4139C15.9797 16.7888 15.4708 16.9993 14.9404 16.999C14.41 16.9988 13.9014 16.7878 13.5265 16.4125C13.1516 16.0373 12.9411 15.5285 12.9414 14.998C12.9417 14.4676 13.1526 13.959 13.5279 13.5841C13.9032 13.2092 14.412 12.9988 14.9424 12.999C15.4728 12.9993 15.9814 13.2103 16.3563 13.5855C16.7312 13.9608 16.9417 14.4696 16.9414 15ZM17.0014 18.48H13.0014V31H17.0014V18.48ZM23.3214 18.48H19.3414V31H23.2814V24.43C23.2814 20.77 28.0514 20.43 28.0514 24.43V31H32.0014V23.07C32.0014 16.9 24.9414 17.13 23.2814 20.16L23.3214 18.48Z" fill="#FDFDFF" />
                                            </svg>
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