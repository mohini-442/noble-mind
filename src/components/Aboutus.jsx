import Image from "next/image";
import aboutus from '../../public/assets/images/aboutus.png';
import Button from "./Button";
import ellipse from '../../public/assets/images/ellipse2.png'
import { Starsvg } from "./Icons";

export default function Aboutus() {
return (
    <>
        <div className="relative z-[2] lg:pt-5 pb-5" id="aboutus">
            <div className="max-w-[1140px] 2xl:!max-w-[1320px] px-5 mx-auto py-4 lg:py-24">
                <div className="flex lg:flex-row flex-col-reverse flex-wrap -mx-3">
                    <div className="lg:w-1/2 flex  justify-center lg:justify-start 2xl:justify-center mx-auto pt-5 lg:pt-0" data-aos="fade-right">
                        <Image src={aboutus} alt="logo" className="h-auto w-auto" height={567} width={514} />
                    </div>
                    <div className="lg:w-1/2 lg:ps-4 2xl:ps-0 flex items-center lg:items-start flex-col ">
                        <div className="flex items-center gap-1 md:pt-3" data-aos="fade-right">
                            <Starsvg />
                            <p className="font-normal text-[16px] font-Exo text-[#131200]" data-aos="fade-right">About Us</p>
                        </div>
                        <h2 className=" font-Outfit font-light text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] pt-2 text-center lg:text-start" data-aos="fade-right">Pioneering Vision & Mission- <span className="font-semibold">Driven Sectoral Innovation </span></h2>
                        <p className=" font-Exo font-normal text-[14px] md:text-[16px] text-[#4D4D4D] leading-[24px] pt-2 md:pt-4 lg:max-w-[471px] text-center lg:text-start" data-aos="fade-right">Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there&#39;s the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al&#39;s promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                        <Button name='!rounded-[4px] !mt-2 lg:!mt-8' btn='Read More' />
                    </div>
                </div>

            </div>
            <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute bottom-[18%] right-[2%] z-[-1] hidden md:block " />
            <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute top-[-2%] left-[2%] z-[-1] hidden md:block " />
        </div>
    </>
)
}