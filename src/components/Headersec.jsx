import { Starsvg } from "./Icons";

export default function Headersec() {
    return (
        <>
            <div id="home" className="flex-grow relative z-10 flex justify-center items-center py-24">
                <div className="max-w-[1140px]  mx-auto px-3">
                    <div className="flex flex-wrap flex-row">
                        <div className="lg:w-7/12 flex justify-center flex-col">
                            <div className="flex items-center gap-1 mx-auto lg:mx-0" data-aos="zoom-y-out" data-aos-delay="2500">
                                <Starsvg />
                                <p className="font-normal text-[16px] font-Exo 2 text-[#131200]" >AI With Noble Mind</p>
                            </div>
                            <h2 className=" font-Outfit font-light text-[34px] md:text-[64px] leading-[38px] md:leading-[66px] text-black lg:pt-3 text-center lg:text-start " data-aos="zoom-y-out" data-aos-delay="2500">Inspiring Innovation, Elevating Solutions – <span className=" font-Outfit text-[30px] md:text-[48px] font-semibold leading-[36px] lg:leading-[57px]"> Noble Mind &#34;  </span></h2>
                            <p className="font-Exo 2 font-normal text-[14px] md:text-[18px] text-[#4D4D4D] max-w-[619px] leading-[24px] md:pt-3 text-center lg:text-start mx-auto lg:mx-0" data-aos="zoom-y-out" data-aos-delay="2500">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}