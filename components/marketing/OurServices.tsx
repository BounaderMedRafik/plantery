"use client";
import {
  gardenerServiceCategories,
  gardenerServices,
} from "@/lib/data/Services";
import React, { useState } from "react";
import { Button } from "../ui/button";

const OurServices = () => {
  return (
    <div className="mt-10 p-2">
      <div className=" grid grid-cols-6 ">
        <div className=" col-span-3 uppercase  md:text-6xl font-black lg:text-8xl max-w-6xl">
          Our Gardening services we provide
        </div>
        <div className=" col-span-3 pt-3 px-5">
          <div className="text-xl leading-tight ">
            Our team of experienced gardeners offers a comprehensive range of
            services to transform your outdoor space into a thriving oasis. From
            meticulous lawn care and expert planting to creative garden design
            and meticulous maintenance, we provide tailored solutions to meet
            your specific needs. We are committed to delivering exceptional
            service and creating stunning outdoor environments that enhance your
            property's beauty and value.
          </div>
        </div>
      </div>
      <div>
        <LosServisoc />
      </div>
    </div>
  );
};

const LosServisoc = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="mt-4">
      <div className="grid grid-cols-6">
        <div className="  col-span-4 flex items-center gap-0.5">
          {gardenerServiceCategories.map((item, i) => (
            <div key={i}>
              <Button
                onClick={() => {
                  setCategory(item);
                }}
                variant={item == category ? "default" : "outline"}
                size={"lg"}
              >
                {item}
              </Button>
            </div>
          ))}
        </div>
        <div className=" col-span-2"> arrwo keys</div>
      </div>
    </div>
  );
};

export default OurServices;
