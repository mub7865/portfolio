import React from "react";
import { caveat } from "@/font";
import Cards from "./Cards";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
        <h4 className={`${caveat.className}  text-4xl lg:text-5xl text-[#5170ab]`}>
          <span className="text-[#5170ab]">M</span>y{" "}
          <span className="text-[#5170ab]">L</span>ast{" "}
          <span className="text-[#5170ab]">W</span>ork
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg text-[#d8e5fb] leading-6">
        "Here are some of my recent projects showcasing my journey and growth as a front-end developer. Each project reflects my commitment to clean, efficient code and user-centered design, combining both creativity and functionality to create meaningful digital experiences."
        </p>

        {/* <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            {[...Array(6)].map((_, index) => (
              <div className="flex flex-col" key={index}>
                <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                  <Image
                    src="/myImage/profile.png"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  ></Image>
                </div>

                <p className="mt-6 text-xl text-[#d8e5fb]">Lorem, ipsum dolor.</p>
            </div>
            ))}
          </div> */}


<div>
      {/* Other sections/components */}
      <Cards /> {/* Render PortfolioSection here */}
      {/* Other sections/components */}
    </div>
      </section> 
    </>
  );
}

export default Portfolio;
