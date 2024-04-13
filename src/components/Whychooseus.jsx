"use client";
import Slider from "react-slick";
import chooseus from '../../public/assets/images/whychooseus.png';
import Image from "next/image";
import ellipse from '../../public/assets/images/ellipse2.png'
import { Starsvg } from "./Icons";

export default function Whychooseus() {
    const teamcard = [
        {
            head: '1',
            heading: 'Customer-Centric',
            paragraph: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.',
        },
        {
            head: '2',
            heading: 'Workplace Harmony',
            paragraph: 'Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.',
        },
        {
            head: '3',
            heading: 'Ethical Leadership',
            paragraph: 'Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.',
        },
    ];
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const cards = teamcard.map((teamcard, i) => (
        <div key={i} className=' d-flex justify-content-center align-items-center md:mt-4'>
            <div className={` rounded-[12px] my-2 md:my-4 mx-3 h-[208px] p-[18px] duration-[0.5s]  border border-[#A854E933] slider_active`}>
                <div className=''>
                    <div className='border-[5px] flex items-center justify-center border-[#A854E93D] rounded-[50px] w-[36px] h-[36px] '>
                        <h2 className="gradient-2 font-Outfit font-extrabold">{teamcard.head}</h2>
                    </div>
                    <p className="font-Outfit text-[20px] font-normal pt-2">{teamcard.heading}</p>
                    <p className="font-Exo 2 font-normal text-[16px] text-[#4D4D4D]">{teamcard.paragraph}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <div className="relative z-[2] overflow-hidden">
                <div className="max-w-[1140px]  px-3 mx-auto pt-2 lg:py-12" id="whychooseus">
                    <div className="flex items-center justify-center gap-1 pt-3" data-aos="fade-left">
                       <Starsvg/>
                        <p className="font-normal text-[16px] font-Exo 2 text-[#131200]" data-aos="fade-left">Why Choose Us</p>
                    </div>
                    <h2 className=" font-Outfit font-light max-w-[552px] mx-auto text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] pt-2 text-center" data-aos="fade-left"> Driving Innovation &  <span className="font-semibold">Transforming Industries</span></h2>
                    <div className=' py-lg-5 py-2' data-aos="fade-left">
                        <Slider {...settings}> {cards}</Slider>
                    </div>
                    <Image src={chooseus} alt="chooseus" className="md:pt-12 pt-9 max-md:h-[300px] " data-aos="fade-up" width={1140} height={527} />
                </div>
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute bottom-[8%] right-[1%] z-[-1] hidden md:block " />
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute top-[9%] left-[2%] z-[-1] hidden md:block " />
            </div>
        </>
    )
}