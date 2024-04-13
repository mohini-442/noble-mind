"use client"
import React from "react";
import Image from "next/image";
import Button from "./Button";
import contactus from '../../public/assets/images/contactus.webp';

export default function Contactus() {
    const [fromdata, setFromdata] = React.useState({
        name: "",
        lastname: "",
        email: "",
        message: "",
    });
    const [Fromerror, setFromerror] = React.useState({
        name: "",
        lastname: "",
        email: "",
        message: "",
    });
    const inputCon = (e) => {
        const { name, value } = e.target;
        setFromdata({ ...fromdata, [name]: value });
    };
    const clg = (e) => {
        e.preventDefault();

        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            email:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: /^[a-zA-Z\s]+$/,
        };
        const error = {};
        if (!regex.name.test(fromdata.name)) {
            error.name = "invaild name";
        }
        if (!regex.lastname.test(fromdata.lastname)) {
            error.lastname = "invaild lastname";
        }
        if (!regex.email.test(fromdata.email)) {
            error.email = "invaild email";
        }
        if (!regex.message.test(fromdata.message)) {
            error.message = "invaild message";
        }
        setFromerror(error);
        if (Object.keys(error).length === 0) {
            setFromdata({
                name: "",
                lastname: "",
                email: "",
                message: "",
            });
            setFromerror({
                name: "",
                lastname: "",
                email: "",
                message: "",
            });
            alert("Form submitted successfully!");
        }
    };
    return (
        <>
            <div className="max-w-[1140px] px-3 mx-auto py-10 lg:py-24" id="contactus">
                <div className="flex flex-row flex-wrap">
                    <div className="lg:w-1/2 mx-auto lg:mx-0 px-3" data-aos="fade-right">
                        <h2 className=" font-Outfit font-semibold text-[32px] md:text-[48px] text-center lg:text-start leading-[37px]">Contact <span className="font-light"> Us </span></h2>
                        <p className="text-[14px] md:text-[16px] font-Exo font-normal text-[#5A594D] max-w-[409px]  text-center lg:text-start mx-auto lg:mx-0 md:pt-4">Feel free to contact us any time . We will get back to you as soon as we can! </p>
                        <form onSubmit={clg} id="form">
                            <div className="sm:flex gap-2 w-full">
                                <div className="flex flex-col pt-3">
                                    <label htmlFor="name" className="font-Exo font-normal text-[16px] text-[#5A594D]">Name</label>
                                    <input
                                        onChange={inputCon}
                                        name="name"
                                        value={fromdata.name}
                                        type="name"
                                        id="name"
                                        autoComplete="off"
                                        className="font-Exo mt-1 rounded-[8px] font-normal text-[16px] text-[#5A594D] p-2 w-full sm:w-[233px]  outline-none h-[48px] border border-[#13120033]"
                                    />
                                    {Fromerror.name && (
                                        <p className=" font-Exo font-normal text-red-800 ">
                                            {Fromerror.name}
                                        </p>
                                    )}
                                </div>
                                <div className="sm:flex flex-col pt-3">
                                    <label htmlFor="lastname"  className="font-Exo font-normal text-[16px] text-[#5A594D]">Last Name</label>
                                    <input
                                        onChange={inputCon}
                                        name="lastname"
                                        id="lastname"
                                        value={fromdata.lastname}
                                        type="text"
                                        autoComplete="off"
                                        className="font-Exo mt-1 rounded-[8px] font-normal text-[16px] text-[#5A594D] p-2 outline-none w-full sm:w-[233px] h-[48px] border border-[#13120033]"
                                    />
                                    {Fromerror.lastname && (
                                        <p className=" font-Exo font-normal text-red-800">
                                            {Fromerror.lastname}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col pt-3">
                                <label htmlFor="email" className="font-Exo 2 font-normal text-[16px] text-[#5A594D]">Email</label>
                                <input
                                    onChange={inputCon}
                                    name="email"
                                    id="email"
                                    value={fromdata.email}
                                    type="email"
                                    autoComplete="off"
                                    className="font-Exo mt-1 rounded-[8px] font-normal text-[16px] text-[#5A594D] p-2  w-full sm:w-[475px] outline-none h-[48px] border border-[#13120033]"
                                />
                                {Fromerror.email && (
                                    <p className=" font-Exo font-normal text-red-800">
                                        {Fromerror.email}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col pt-3">
                                <label htmlFor="meesage" className="font-Exo font-normal text-[16px] text-[#5A594D]">Message</label>
                                <textarea
                                    onChange={inputCon}
                                    name="message"
                                    id="meesage"
                                    value={fromdata.message}
                                    type="message"
                                    className="font-Exo mt-1 max-lg:h-[94px] h-[135px] p-2 rounded-[8px] font-normal text-[16px] resize-none text-[#5A594D] w-full sm:w-[475px] outline-none border border-[#13120033]"
                                />
                                {Fromerror.message && (
                                    <p className="font-Exo font-normal text-red-800">
                                        {Fromerror.message}
                                    </p>
                                )}
                            </div>
                            <Button name="!rounded-[4px] !mt-5" btn="Submit" />
                        </form>
                  
                    </div>
                    <div className="lg:w-1/2 px-3 sm:mx-auto pt-10 lg:pt-0 " data-aos="fade-left">
                        <Image src={contactus} alt="contactus" height={720} width={598} />
                    </div>
                </div>
            </div>
        </>
    )
}













// import React from "react";
// import {
//     Col,
//     Container,
//     Form,
//     FormLabel,
//     Image,
//     InputGroup,
//     Row,
// } from "react-bootstrap";
// import contactus from "../assets/images/contactus.webp";
// import Button from "./Button";

// const Contactus = () => {
   
//     return (
//         <div className=" position-relative  z-1 mt-6 pt-sm-5" id="blog">
//             <Container className=" mt-5 pt-sm-5">
//                 <Row className=" flex-column-reverse  flex-lg-row ">
//                     <Col lg={5} className="pt-4 pt-lg-0">
//                         <h2
//                             data-aos="fade-down"
//                             className="outfit fw-semibold mb-3 text-center text-lg-start   fs-lg lh_lg c-primery "
//                         >
//                             Contact
//                             <span className=" fw-light"> Us</span>
//                         </h2>
//                         <p
//                             data-aos="fade-down"
//                             className="exo mb-0 fw-normal fs-sm lh-s c-secandary-high"
//                         >
//                             Feel free to contact us any time . We will get back to you as soon
//                             as we can!
//                         </p>
//                         <Form className=" mt-4" onSubmit={clg}>
//                             <div className=" d-flex align-items-center gap-11">
//                                 <div className=" d-flex w-100 flex-column ">
//                                     <FormLabel className=" exo fw-normal  fs-sm lh-s c-secandary-low">
//                                         Name
//                                     </FormLabel>
//                                     <input
//                                         onChange={inputCon}
//                                         name="name"
//                                         value={fromdata.name}
//                                         type="name"
//                                         className="input-deco"
//                                     />
//                                     {Fromerror.name && (
//                                         <p className=" exo fw-normal  fs-sm lh-s text-danger">
//                                             {Fromerror.name}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div className=" d-flex w-100 flex-column ">
//                                     <FormLabel className=" exo fw-normal  fs-sm lh-s c-secandary-low">
//                                         Last Name
//                                     </FormLabel>
//                                     <input
//                                         onChange={inputCon}
//                                         name="lastname"
//                                         value={fromdata.lastname}
//                                         type="name"
//                                         className="input-deco"
//                                     />
//                                     {Fromerror.lastname && (
//                                         <p className=" exo fw-normal  fs-sm lh-s  text-danger">
//                                             {Fromerror.lastname}
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className=" d-flex w-100 flex-column mt-3 ">
//                                 <FormLabel className=" exo fw-normal  fs-sm lh-s c-secandary-low">
//                                     Email
//                                 </FormLabel>
//                                 <input
//                                     onChange={inputCon}
//                                     name="email"
//                                     value={fromdata.email}
//                                     type="email"
//                                     className="input-deco"
//                                 />
//                                 {Fromerror.email && (
//                                     <p className=" exo fw-normal  fs-sm lh-s text-danger">
//                                         {Fromerror.email}
//                                     </p>
//                                 )}
//                             </div>
//                             <div className=" d-flex w-100 flex-column mt-3 ">
//                                 <FormLabel className=" exo fw-normal  fs-sm lh-s c-secandary-low">
//                                     Message
//                                 </FormLabel>
//                                 <textarea
//                                     onChange={inputCon}
//                                     name="message"
//                                     value={fromdata.message}
//                                     type="message"
//                                     className="input-deco textarea-deco"
//                                 />
//                                 {Fromerror.message && (
//                                     <p className=" exo fw-normal  fs-sm lh-s text-danger">
//                                         {Fromerror.message}
//                                     </p>
//                                 )}
//                             </div>
//                             <Button class=" mt-4" type="submit" text="Submit" />
//                         </Form>
//                     </Col>
//                     <Col lg={7}>
//                         <div className=" pl-52">
//                             <Image
//                                 src={contactus}
//                                 alt="contactus"
//                                 height={584}
//                                 className=" w-100 h-400  rounded-12 "
//                             />
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Contactus;