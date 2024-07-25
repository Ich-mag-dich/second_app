"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

import ButtonBase from "@/components/button/ButtonBase";
import Line from "@/components/Line";

export default function About() {
  const aa = "#9ab6f0";
  const a_style =
    "w-[150px] xl:mx-2 my-2 h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl border-[#516794] xl:hover:border-white duration-300 border-2 xl:hover:text-white xl:hover:cursor-pointer xl:text-[#516794] xl:hover:text-white";
  const a_dummy = "w-[150px] xl:mx-2 h-[50px] px-[25px] py-[10px] text-center";
  const divWidth =
    " my-[30px] w-[400px] h-[625px] sm:w-[400px] sm:h-[625px] md:w-[400px] md:h-[625px] lg:w-[400px] lg:h-[625px] xl:w-[400px] xl:h-[625px] 2xl:w-[400px] 2xl:h-[625px] mb-[60px]";

  return (
    <div className="h-auto w-auto">
      <div className="text-center flex m-auto justify-center mt-4 z-10">
        <div className="flex justify-center flex-wrap my-[2.25rem]">
          <div
            className=" w-[400px] lg:w-[600px] xl:w-[1200px] min-h-[500px] h-auto relative pb-[92px] rounded-2xl bg-white mx-4 mt-5"
            style={{ boxShadow: "gray 0px 3px 6px 0px" }}
          >
            <div className="mx-12 min-h-[250px] justify-between xl:justify-start mt-20 xl:mx-16 text-center mb-10 flex flex-wrap">
              <ButtonBase
                secondary_color="stellight"
                href="/menu/upscale"
                primary_color="primary"
                name="Upsacle"
                target="blank"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
