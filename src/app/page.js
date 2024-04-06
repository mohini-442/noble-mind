"use client"
import Aboutus from "@/components/Aboutus";
import Headersec from "@/components/Headersec";
import Mynav from "@/components/Mynav";
import Whychooseus from "@/components/Whychooseus";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Myfaq from "@/components/Myfaq";
import Myfooter from "@/components/Myfooter";
import Contactus from "@/components/Contactus";
import Myloader from "@/components/Myloader";
import Backtotop from "@/components/Backtotop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
    });

    return () => {
      AOS.refresh();
    }
  }, []);
  return (
    <>
      <div className="bg-white overflow-hidden">
        <div className=" bg-my_bg_image after:w-full lg:after:w-0 after:h-full   after:bg-white after:opacity-50 after:absolute relative bg-cover bg-no-repeat bg-center bg-Size min-h-[60vh] lg:min-h-screen flex flex-col">
          <Mynav />
          <Headersec />
        </div>
        <Aboutus />
        <Whychooseus />
        <Contactus />
        <Myfaq />
        <Myfooter />
        <Myloader />
        <Backtotop />
      </div>
    </>
  );
}
