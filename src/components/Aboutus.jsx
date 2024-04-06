import Image from "next/image";
import aboutus from '../../public/assets/images/aboutus.png';
import Button from "./Button";
import ellipse from '../../public/assets/images/ellipse2.png'

export default function Aboutus() {
    return (
        <>
            <div className="relative z-[2] lg:pt-5 pb-5" id="aboutus">
                <div className="max-w-[1140px] xxl:max-w-[1440px] px-5 mx-auto py-4 lg:py-24">
                    <div className="flex lg:flex-row flex-col-reverse flex-wrap -mx-3">
                        <div className="lg:w-1/2 flex  justify-center lg:justify-start mx-auto pt-5 lg:pt-0" data-aos="fade-right">
                            <Image src={aboutus} alt="logo" height={567} width={514} />
                        </div>
                        <div className="lg:w-1/2 lg:ps-4 flex items-center lg:items-start flex-col ">
                            <div className="flex items-center gap-1 md:pt-3" data-aos="fade-right">
                                <span><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9187 6.87573L11.1603 14.2314L3.80469 16.9897L11.1603 19.7481L13.9187 27.1037L16.677 19.7481L24.0327 16.9897L16.677 14.2314L13.9187 6.87573Z" fill="#00EAEC" />
                                    <path d="M13.9187 6.87573L11.1603 14.2314L3.80469 16.9897L11.1603 19.7481L13.9187 27.1037L16.677 19.7481L24.0327 16.9897L16.677 14.2314L13.9187 6.87573Z" fill="url(#paint0_linear_101_304)" />
                                    <path d="M5.60149 1.11942L4.23608 5.25408L0.223112 6.94403L4.35777 8.30944L6.04772 12.3224L7.41314 8.18774L11.4261 6.4978L7.29144 5.13238L5.60149 1.11942Z" fill="#00EAEC" />
                                    <path d="M5.60149 1.11942L4.23608 5.25408L0.223112 6.94403L4.35777 8.30944L6.04772 12.3224L7.41314 8.18774L11.4261 6.4978L7.29144 5.13238L5.60149 1.11942Z" fill="url(#paint1_linear_101_304)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_101_304" x1="6.11235" y1="0.224727" x2="69.1736" y2="54.8026" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#A854E9" />
                                            <stop offset="1" stop-color="#4F91FC" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_101_304" x1="1.13135" y1="-2.39195" x2="37.2609" y2="26.4442" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#A854E9" />
                                            <stop offset="1" stop-color="#4F91FC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                </span>
                                <p className="font-normal text-[16px] font-Exo text-[#131200]" data-aos="fade-right">About Us</p>
                            </div>
                            <h2 className=" font-Outfit font-light text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] pt-2 text-center lg:text-start" data-aos="fade-right">Pioneering Vision & Mission- <span className="font-semibold">Driven Sectoral Innovation </span></h2>
                            <p className=" font-Exo font-normal text-[14px] md:text-[16px] text-[#4D4D4D] leading-[24px] pt-2 md:pt-4 lg:max-w-[471px] text-center lg:text-start" data-aos="fade-right">Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there&#39;s the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al&#39;s promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                            <Button name='!rounded-[4px] !mt-2 !lg:mt-8' btn='Read More' />
                        </div>
                    </div>

                </div>
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute bottom-[18%] right-[8%] z-[-1] hidden md:block " />
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute top-[-6%] left-[12%] z-[-1] hidden md:block " />
            </div>
        </>
    )
}