"use client";
import Image from "next/image";
import ellipse from '../../public/assets/images/ellipse2.png'
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg className={`${id === open ? "" : "rotate-180"
                } h-5 w-5   transition-transform`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                    <path d="M12.0008 9.0252C11.8674 9.0252 11.7381 9.0502 11.6128 9.1002C11.4874 9.1502 11.3834 9.21686 11.3008 9.3002L6.70078 13.9002C6.51745 14.0835 6.42578 14.3169 6.42578 14.6002C6.42578 14.8835 6.51745 15.1169 6.70078 15.3002C6.88411 15.4835 7.11745 15.5752 7.40078 15.5752C7.68411 15.5752 7.91745 15.4835 8.10078 15.3002L12.0008 11.4002L15.9008 15.3002C16.0841 15.4835 16.3174 15.5752 16.6008 15.5752C16.8841 15.5752 17.1174 15.4835 17.3008 15.3002C17.4841 15.1169 17.5758 14.8835 17.5758 14.6002C17.5758 14.3169 17.4841 14.0835 17.3008 13.9002L12.7008 9.3002C12.6008 9.2002 12.4924 9.1292 12.3758 9.0872C12.2591 9.0452 12.1341 9.02453 12.0008 9.0252Z" fill="#131200" />
                </g>
            </svg>
        </div>
    );
}

export default function Myfaq() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className="relative z-[2]" id="faq">
                <div className="max-w-[774px] mx-auto px-3 pt-8 lg:pt-16 lg:pb-20">
                    <div >
                        <h2 className=" text-black ff-outfit font-light md:text-[48px] text-[32px] text-center leading-[38px] " data-aos="fade-left">
                            Frequently <span className="font-semibold"> Asked Questions</span>
                        </h2>
                        <p className="text-center ff-exo font-normal text-[16px] text-[#5A594D] max-w-[477px] mx-auto pb-5 pt-3">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat mi leo. Nibh nisl consequat metus.</p>
                        <div data-aos="fade-left" data-aos-once="true">
                            <Accordion
                                className={`${open === 1 ? " !border-[#A854E9] !border-b-[5px] !border-t-1 " : ""} mt-5 border mb-[8px] shadow-[0px_4px_32px_0px#00000014] border-[#A854E933] rounded-[6px] px-5 py-5`}
                                open={open === 1}
                                icon={<Icon id={1} open={open} />}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className={`${open === 1 ? "!text-black " : ""} ff-outfit font-medium  text-[#4D4D4D] text-[16px] text-start border-0 py-0`}
                                >
                                    What is Artificial Intelligence (AI)?
                                </AccordionHeader>
                                <AccordionBody className="text-[14px] md:text-[16px] font-normal ff-exo text-[#4D4D4D] pt-2 pb-0">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div data-aos="fade-right" data-aos-once="true">
                            <Accordion
                                open={open === 2}
                                icon={<Icon id={2} open={open} />}
                                className={`${open === 2 ? " !border-[#A854E9] !border-b-[5px] !border-t-1 " : ""} border mb-3 overflow-hidden shadow-[0px_4px_32px_0px#00000014] border-[#A854E933] rounded-[6px] px-5 py-5`}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(2)}
                                    className={`${open === 2 ? "!text-black " : ""} ff-outfit font-medium text-[#4D4D4D] text-[16px] text-start border-0 py-0`}
                                >
                                    How does AI benefit our company?
                                </AccordionHeader>
                                <AccordionBody className={`text-[14px] md:text-[16px] font-normal ff-exo text-[#4D4D4D] pt-2 pb-0`}>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div data-aos="fade-left" data-aos-once="true">
                            <Accordion
                                className={`${open === 3 ? " !border-[#A854E9] !border-b-[5px] !border-t-1 " : ""} border mb-3 shadow-[0px_4px_32px_0px#00000014] border-[#A854E933] rounded-[6px] px-5 py-5`}

                                open={open === 3}
                                icon={<Icon id={3} open={open} />}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(3)}
                                    className={`${open === 3 ? "!text-black " : ""} ff-outfit  text-[#4D4D4D] font-medium text-[16px] text-start border-0 py-0`}
                                >
                                    What types of AI technologies are relevant to our industry?
                                </AccordionHeader>
                                <AccordionBody className="text-[14px] md:text-[16px] font-normal ff-exo text-[#4D4D4D] pt-2 pb-0">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div data-aos="fade-right" data-aos-once="true">
                            <Accordion      
                                className={`${open === 4 ? " !border-[#A854E9] !border-b-[5px] !border-t-1 " : ""} border mb-3 shadow-[0px_4px_32px_0px#00000014] border-[#A854E933] rounded-[6px] px-5 py-5`}
                                open={open === 4}
                                icon={<Icon id={4} open={open} />}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(4)}
                                    className={`${open === 4 ? "!text-black " : ""} ff-outfit  text-[#4D4D4D] font-medium text-[16px] text-start border-0 py-0`}
                                >
                                    How can our employees adapt to AI integration?
                                </AccordionHeader>
                                <AccordionBody className="text-[14px] md:text-[16px] font-normal ff-exo text-[#4D4D4D] pt-2 pb-0">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div data-aos="fade-left" data-aos-once="true">
                            <Accordion
                                className={`${open === 5 ? " !border-[#A854E9] !border-b-[5px] !border-t-1 " : ""} border mb-3 shadow-[0px_4px_32px_0px#00000014] border-[#A854E933] rounded-[6px] px-5 py-5`}
                                open={open === 5}
                                icon={<Icon id={5} open={open} />}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(5)}
                                    className={`${open === 5 ? "!text-black " : ""} ff-outfit  text-[#4D4D4D] font-medium text-[16px] text-start border-0 py-0`}
                                >
                                    How can our company ensure data security with AI?
                                </AccordionHeader>
                                <AccordionBody className="text-[14px] md:text-[16px] font-normal ff-exo text-[#4D4D4D] pt-2 pb-0">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute bottom-[30%] right-[2%] z-[-1] hidden lg:block" />
                <Image src={ellipse} alt="ellipse" width={70} height={95} className="absolute top-[2%] left-[2%] z-[-1] hidden lg:block" />
            </div>
        </>
    )
}